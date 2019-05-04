/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    
    let stack = []
    let ret = []
    
    let dfs = function(node, sum){
        if(node){
            if(node.val == sum && !node.left && !node.right){
                ret.push(stack.concat([node.val]))
                return
            }
            
            stack.push(node.val)
            dfs(node.left, sum-node.val)
            dfs(node.right, sum-node.val)
            stack.pop()
        }
    }
    
    dfs(root, sum)
    return ret
};
