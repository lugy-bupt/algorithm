/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let stack = []
    let cur = root
    while(cur){
        stack.push(cur)
        cur = cur.left
    }
    
    while(stack.length > 0){
        cur = stack.pop()        
        if(k == 1){
            return cur.val
        }
        
        k -= 1
        if(cur.right){
            cur = cur.right
            while(cur){
                stack.push(cur)
                cur = cur.left
            }
        }
    }
    
    return -1
};
