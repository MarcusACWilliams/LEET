/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
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
    //

     var stack = [];
     var Current = root;
     var result;
 
     while(Current != null) {

         if(Current.left == null) {
             stack.push(Current.val);
             Current = Current.right;
             if(stack.length == k){ 
                result = stack.pop();
                Current = null;
             }
         }else {
            // Move to the left child
            let node = Current.left;
            // Keep taking the right branch until you find NULL or the "Current" node
            while(node.right != null && node.right != Current) {
                        node = node.right;
            }
            // Right child is NULL 
            if(node.right == null) {
                // point back to the "Predecessor"
                node.right = Current;
                // Move to the LEFT subtree --> iterate next loop
                Current = Current.left;
            // We have looped back to a "Predecessor"
            }else if(node.right == Current) {
                // Remove pointer
                node.right = null;
                stack.push(Current.val); // For logging purposes only
                // Move on to RIGHT subtree --> iterate next loop
                Current = Current.right;

                if(stack.length == k){ 
                    result = stack.pop();
                    Current = null;
                }
             }
         }
     }
 
     while(stack.length > 0) {
         console.log(stack.pop());
     }
     return result;
 };

 //kthSmallest([10,5,30,-2,6,null,40,null,2,null,8,null,null,null,null,-1], 2);
 //kthSmallest([5,3,6,2,4,null,null,1], 3);