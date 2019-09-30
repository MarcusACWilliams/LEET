/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var output = [];
    var numMap = new Map();
    var sum = 1;

    nums.forEach( (num) => {
        if(numMap.has(num)) { 
            numMap.set(num, (numMap.get(num)+1) );
        }
        else {
            numMap.set(num, 1);
        }
    });

    nums.forEach( (i) => {
        sum = 1;
        numMap.set(i, (numMap.get(i)-1) );
        numMap.forEach( (num, index) => {
            sum = sum * Math.pow(index, num);
            
        });
        numMap.set(i, (numMap.get(i)+1) );
        output.push(sum);
    });

    output.forEach((num) => {
        console.log(num);
    });
    
};

productExceptSelf([1,2,3,4]);
productExceptSelf([0,0]);
productExceptSelf([1,1]);