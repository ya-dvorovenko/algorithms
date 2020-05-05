/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    s.reverse();
};

var reverseString = function(s) {
    if(!Array.isArray(s)) {
        return s;
    }
    if(s.length === 1) {
        return s;
    }
    
    const middle = Math.floor(s.length / 2);
    let currentElem;
    
    for (let i = 0; i < middle; i++) {
        currentElem = s[i];
        s[i] = s[s.length - i - 1];
        s[s.length - i - 1] = currentElem;
    }
}; 
