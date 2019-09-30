
/* Sept 26, 2019 - faster than 88.03% - less memory than 70%
*  ---> Completion Time: 43 mins 30 sec <---
*
*  This took waaaaay to long to complete, in terms of days spent attempting, but I did learn some strategy for
*  converting recursion to iteration/DP.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    var leftTree = [];
    var rigthTree = [];

    if(root == null) {
        return true;
    }

    if(root.left != null)leftTree.push(root.left);
        else {leftTree.push(new TreeNode(null));}
    if(root.right != null)rigthTree.push(root.right);
        else {rigthTree.push(new TreeNode(null));}

    while(leftTree.length > 0 && rigthTree.length > 0) {

        var leftParent = leftTree.shift();
        var rightParent = rigthTree.shift();

        // Popped nodes represent left and right tree roots
        if(leftParent.val != rightParent.val) {
            return false;
        }

        if(leftParent.val != null) {
            if(leftParent.left != null) {
                leftTree.push(leftParent.left);
            }else {leftTree.push(new TreeNode(null));}
            if(leftParent.right != null) {
                leftTree.push(leftParent.right);
            }else {leftTree.push(new TreeNode(null));}
        }

        if(rightParent.val != null) {
            if(rightParent.right != null) {
                rigthTree.push(rightParent.right);
            }else {rigthTree.push(new TreeNode(null));}
            if(rightParent.left != null) {
                rigthTree.push(rightParent.left);
            }else {rigthTree.push(new TreeNode(null));}
        }

    }

    return true;

};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


var rt = new TreeNode(1);

rt.left = new TreeNode(0);
isSymmetric(rt);

rt.left = new TreeNode(2);
rt.right = new TreeNode(2);

rt.left.left = new TreeNode(3);
rt.left.right = new TreeNode(4);

rt.right.left = new TreeNode(4);
rt.right.right = new TreeNode(3);

isSymmetric(rt);

