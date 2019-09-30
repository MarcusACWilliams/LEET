/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var leftBounds = 0, rightBounds = 0;
    var stack = [];
    var parens = '';
    var results = [];

    while(rightBounds < n || stack.length > 0) {
        
        while(leftBounds < n) {
            parens = parens +'('; 
            leftBounds++;
            stack.push([ [leftBounds, rightBounds], parens ]);
        }

        var state = stack.pop();
        //update current state
        leftBounds = state[0][0]; rightBounds = state[0][1];
        parens = state[1];


        if(rightBounds < leftBounds) {
            parens = parens + ')';
            rightBounds++;
        }
        
        if(rightBounds == n) {
            results.push(parens);
            console.log(parens);
        }else {
            if(rightBounds != leftBounds)
            stack.push([ [leftBounds, rightBounds], parens ]);
        }
    }
    
    return results;

};

