export default `
    let isPalindrome = (word) => {
    let [length, result] = [word.length, true];
    for (let i = 0; i &lt; length / 2; i++) {
    if (word[i] !== word[length - 1 - i]) result = false;
    }
    return result;
    }
    module.exports = isPalindrome;
`
    
