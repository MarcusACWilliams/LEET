/** Sept 29, 2019 - faster than 94.11% - less memory than 72.73%
*  ---> Completion Time: NA <---
*/
/**
 * @param {number[]} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    //Morris Traversal
    // while current is not Null
    //if (no left)
    //      visit current
    //      current = right
    //else
    //      pred = findPred(current)
    //if(no right pred)

     var stack = [];
     var Current = root;
     var result;
     var n = 0;
 
     while(Current != null) {

         if(Current.left == null) {
            stack.push(Current.val);
            n++;
            if(stack.length == k){ 
                return stack.pop();
            }
            // Move on to RIGHT subtree --> iterate next loop
            Current = Current.right;
         }else {
            // Move to the left child
            let node = Current.left;
            // Keep taking the right branch until you find NULL or the "Current" node
            while(node.right != null && node.right != Current) {
                node = node.right;
            }
            // If Right child is NULL 
            if(node.right == null) {
                // point back to the "Predecessor"
                node.right = Current;
                // Move to the LEFT subtree --> iterate next loop
                Current = Current.left;
            // If we have looped back to a "Predecessor"
            }else if(node.right == Current) {
                // Remove pointer
                node.right = null;
                n++;
                stack.push(Current.val); // For logging purposes only
                if(stack.length == k){ 
                    return stack.pop();
                }
                // Move on to RIGHT subtree --> iterate next loop
                Current = Current.right;
            }
         }
     }
 
     /*while(stack.length > 0) {
         console.log(stack.pop());
     }
     */
     return result;
 };

 //kthSmallest([10,5,30,-2,6,null,40,null,2,null,8,null,null,null,null,-1], 2);
 //kthSmallest([5,3,6,2,4,null,null,1], 3);