
/* Sept 27, 2019 - faster than 57.08% - less memory than 52.24% ***EDIT*** faster than 91.54%
*
*  ---> Completion Time: 20 mins 30 sec <---
*
*/
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    
    var Jewels = new Set();
    var jewelSum = 0;

    var iterator = J[Symbol.iterator]();
    var aChar = iterator.next(); 

    while(!aChar.done) {
            Jewels.add(aChar.value);
            aChar = iterator.next(); 
    }

    iterator = S[Symbol.iterator]();
    aChar = iterator.next();

    while(!aChar.done) {
        if(Jewels.has(aChar.value)) {
            jewelSum++; 
        }
        aChar = iterator.next(); 
    }

    return jewelSum;
};

numJewelsInStones("aA", "aaa");