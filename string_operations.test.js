function isPalindrome(str) {
    const cleaned = str.toLowerCase().split(' ').join('');
    return cleaned === cleaned.split('').reverse().join('');
}

function isAnagram(str1, str2) {
    const format = str => str.toLowerCase().split(' ').join('').split('').sort().join('');
    return format(str1) === format(str2);
}
