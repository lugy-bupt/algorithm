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
    if (!root) return true
    
    let checkSymm = function(n1, n2){
        if (!n1 && !n2) return true
        if (!n1 || !n2) return false
        
        return n1.val == n2.val && checkSymm(n1.left, n2.right) && checkSymm(n1.right, n2.left)
    }
    
    return checkSymm(root.left, root.right)
};
