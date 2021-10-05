/** Oct 28, 2019 - faster than 95.36% - less memory than 85.11% **Update** - faster than 99.12% - less memory than 85.11%
 *  ---> Completion Time: ~60mins <---
 *  ---> Hard Tier Problem <---
 *  ---> BEST TIME <---
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
    // Use a min heap and max heap.. Distribute value equally.. Median is the last entry in the heap with one extra element!!
    var median;
    // Get combined element size and divide
    var totalSize = nums1.length + nums2.length;
    var midPoint = (totalSize) >> 1;
    // Point to first index
    var pt1 = nums1.length-1; pt2 = nums2.length-1;

    // Build Max Heap
    var max = [];

    var one = pt1 >= 0 ? nums1[pt1] : Number.NEGATIVE_INFINITY; 
    var two = pt2 >= 0 ? nums2[pt2] : Number.NEGATIVE_INFINITY;

    for (let i = totalSize; i >= midPoint; i--) {
        
        one > two ? ( max.push(one), pt1--, ( pt1>=0 ? one=nums1[pt1] : one=Number.NEGATIVE_INFINITY) ) : (max.push(two), pt2--, ( pt2>=0 ? two=nums2[pt2] : two=Number.NEGATIVE_INFINITY ) );
    }

    if(totalSize%2 == 0) {
        median = (max.pop() + max.pop() )/2;
    }
    else {
        // Throw away extra value
        max.pop();
        
        median = max.pop();
    }


    return median;

};


//findMedianSortedArrays([1,2],[3,4,5,6,7,8,9]);
findMedianSortedArrays([1,2],[3,4]);