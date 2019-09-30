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
             let node = Current.left;
                while(node.right != null && node.right != Current) {
                         node = node.right;
                }
             if(node.right == null) {
                 node.right = Current;
                 Current = Current.left;
             }else if(node.right == Current) {
                 node.right = null;
                 stack.push(Current.val);
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