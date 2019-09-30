/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var freq = new Map();
    var result = [];
    
    var value;
    nums.forEach( (num) => {
        freq.set(num, ((freq.get(num)||0)+1) );
    });
    
    let i;
    for(i = 1; i <=k; i++) {
        let max = 0, maxKey;
        freq.forEach( (val, key) => {
            if(val > max) {
                maxKey = key;
                max = val;
            }
        });
        result.push(maxKey);
        freq.delete(maxKey);
    }

    return result;
};

//topKFrequent([1,1,1,2,2,3], 2);
//topKFrequent([4,1,-1,2,-1,2,3], 2);
topKFrequent([5,3,1,1,1,3,73,1], 2);
