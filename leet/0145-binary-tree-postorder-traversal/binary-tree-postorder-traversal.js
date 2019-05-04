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
var postorderTraversal = function(root) {
    if (!root) return []
    
    let stack = []
    let cur = root
    let ret = []
    let last
    
    while(cur){
        stack.push(cur)
        cur = cur.left
    }
    
    while(stack.length > 0){
        cur = stack[stack.length - 1]
        
        if(!cur.right || (last && cur.right == last)){
            ret.push(cur.val)
            last = stack.pop()
        }else if(cur.right){
            cur = cur.right
            while(cur){
                stack.push(cur)
                cur = cur.left
            }
        }
    }
    
    return ret
};
