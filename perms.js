/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
    var output = [];
    var maxLength = nums.length;
    var stack = [];
    var NumStack = [];
    var numSet = new Set();
    var currentSet;
    var currentNum;

    nums.forEach( (num) => {
        stack.push(new Set([num]) );
        numSet.add(num);
        
    });
    
    while( stack.length > 0) {
        currentSet = stack.pop();
        
        if( currentSet.size < maxLength) {
            
            nums.forEach( (num)  => {
                if(!currentSet.has(num)) {
                    stack.push(new Set([...currentSet , num]) );
                }
            });

            continue;
        
        }
            //if(currentSet.size == maxLength) {
                output.push([...currentSet]);
            //}
    }

    return output;
    /*output.forEach( (set) => {
        console.log([...set]);
    });*/
};

//permute([1,2,3]);