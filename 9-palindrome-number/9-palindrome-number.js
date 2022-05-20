/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const reversed = x.toString().split('').reverse();
    if (reversed.join('') === reversed.reverse().join('')) {
        return true;
    }
    return false;
};
