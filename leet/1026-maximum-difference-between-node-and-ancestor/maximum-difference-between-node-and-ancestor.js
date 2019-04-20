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
var maxAncestorDiff = function(root) {
    let ret = 0
    if (!root) return ret

    let dfs = function(node){
        if (node){
            ret = Math.max(ret, Math.abs(root.val - node.val))
            dfs(node.left)
            dfs(node.right)
        }
    }
    
    dfs(root)

    return Math.max(ret, Math.max(maxAncestorDiff(root.left), maxAncestorDiff(root.right)))
};
