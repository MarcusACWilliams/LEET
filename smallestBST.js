/** Oct 1, 2019 - faster than 92.71% - less memory than 93.75%
 *  ---> Completion Time: ~20mins <---
 *
 * }
 */
/**
 * @param {number[]} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var localRoot = new TreeNode(root[0], 0, root);
    var stack = [];
    var Current = localRoot;

    while(Current != null) {
        if(Current.left == null) {
            stack.push(Current.val);
            Current = Current.right;
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
            }
        }
    }

    while(stack.length > 0) {
        console.log(stack.pop());
    }
};

function TreeNode(val, index, arr) {
      this.val = val;
      this.left = arr[(2*index)+1] ? new TreeNode(arr[(2*index)+1],(2*index)+1, arr) : null;
      this.right = arr[(2*index)+2] ? new TreeNode(arr[(2*index)+2],(2*index)+2, arr) : null;
 }
//kthSmallest([10,5,30,-2,6,null,40,null,2,null,8,null,null,null,null,-1], 2);
//kthSmallest([5,3,6,2,4,null,null,1], 3);