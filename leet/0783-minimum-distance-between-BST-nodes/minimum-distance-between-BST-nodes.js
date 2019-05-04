/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
    let getMax = function(node){
        if (node.right) return getMax(node.right)
        return node
    }
    
    let getMin = function(node){
        if (node.left) return getMin(node.left)
        return node
    }
    let ret = 999999
    if (root.left) ret = Math.min(ret, root.val - getMax(root.left).val)
    if (root.right) ret = Math.min(ret, getMin(root.right).val - root.val)
    
    if(root.left) ret = Math.min(ret, minDiffInBST(root.left))
    if(root.right) ret = Math.min(ret, minDiffInBST(root.right))
    
    return ret
};
