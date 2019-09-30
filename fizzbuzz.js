/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var i=1;
    var ret = [];
    var s;

    while( i <= n) {
        s = '';
        if(i%3 == 0) {
            s = "fizz";
        }
        if(i%5 == 0) {
            s = s + "buzz";
        }
        if(s == ''){
            s = i.toString();
        }
        i++;
        ret.push(s);
    }
};

