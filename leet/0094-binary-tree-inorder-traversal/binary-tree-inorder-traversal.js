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
    if (!root) return []
    
    let cur = root
    let stack = []
    let ret = []
    
    while (cur){
        stack.push(cur)
        cur = cur.left
    }
    
    while(stack.length > 0){
        cur = stack.pop()
        ret.push(cur.val)
        
        if(cur.right){
            cur = cur.right
            while(cur){
                stack.push(cur)
                cur = cur.left
            }
        }
    }
    
    return ret
};
