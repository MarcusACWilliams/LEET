/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var result = [[]];

    for (let i = 0; i < nums.length; ++i) {
          
        let length = result.length;
		for (let j = 0; j < length; ++j) {
			result.push([...result[j],nums[i]])
        }  
   }
   result.forEach((set) => {
       console.log([...set]);
   })
   return result;
 };

subsets([1,2,3]);