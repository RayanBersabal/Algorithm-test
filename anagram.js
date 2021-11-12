function anagram(str1, str2) {
    let isAnagram = true
    if (str1.length !== str2.length) {
        return false
    }
    for (let i = 0; i < str1.length; i++) {
        if (!str2.includes(str1[i])) {
            return false
        }
        
    }
}
console.log(anagram('read','dear'))