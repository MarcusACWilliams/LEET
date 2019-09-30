/* Sept 27, 2019 - Faster than 19.96% - less Memory than 100% ***EDIT*** Faster than 74.46! ***EDIT*** Faster than 89.91%
* 
*   --> Completion Time: 41 mins <--    ** +15 mins for improved algorithim
*
*   This was a slightly modifiyed level order search. 
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    var Queue = [];
    var children = ["left", "right"];
    var one , two;

    if(!x || !y) { 
        return false;
    }

    if(root != null) {
        root.level = 0;
        Queue.push(root);
        if( root.val == x) { 
            one = [0, null];
        }else if(root.val == y) {
            two = [0, null];
        }
    }

    var parentNode, level, kid;
    // Standard BFS - Do work at end of iteration
    while(Queue.length > 0 && (!one || !two) ) {
        parentNode = Queue.shift();
        level = (parentNode.level +1);

        children.forEach( (child) => {
            kid = parentNode[child];
            if(kid != null) {
                kid.level = level;
                Queue.push(kid);

                if( kid.val == x) { 
                    one = [level, parentNode.val];
                }else if(kid.val == y) {
                    two = [level, parentNode.val];
                }
            }
        });
    }

    // Doing work...
    if( one && two ) { // Find nodes...
        if(one[0] == two[0] ) { // Check cousin status...
            if(one[1] != two[1] ) { // Double check that they aren't really siblings...
                return true;
            }
        }
    }

    return false;
};

function TreeNode(val) {
         this.val = val;
         this.left = this.right = null;
}

var rt = new TreeNode(1);

rt.left = new TreeNode(2);
rt.right = new TreeNode(3);

rt.left.left = new TreeNode(4);

isCousins(rt, 4, 3);