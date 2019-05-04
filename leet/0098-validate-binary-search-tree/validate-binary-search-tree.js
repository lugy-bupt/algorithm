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
var isValidBST = function(root) {
    if (!root) return true
    
    let less = function (node, val){
        return !node || (node.val < val && less(node.left, val) && less(node.right, val))
    }
    
    let greater = function(node, val){
        return !node || (node.val > val && greater(node.left, val) && greater(node.right, val))
    }
    
    return less(root.left, root.val) && greater(root.right, root.val) && isValidBST(root.left) && isValidBST(root.right)
};
