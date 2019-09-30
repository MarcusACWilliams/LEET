/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var _root = root;
    var stack = [];
    var number = [];

    var node = root;
    //stack.push(root);

    while(node != null) {

        while(node.left != null) {
            stack.push(node);
            node = node.left;     
        }

        number.push(node.val);

        if(node.right != null) {
            node = node.right;
        }
        else {
            node = (node = stack.pop()) ? node : null;
            if(node != null) node.left = null;
        }
    }

    return number;
};


 function Node(val) {
         this.val = val;
         this.left = this.right = null;
     }
