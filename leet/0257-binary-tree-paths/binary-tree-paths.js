/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if (!root) return []
    
    let cur = root
    let stack = []
    let ret = []
    let lastNode
    while(cur){
        stack.push(cur)
        cur = cur.left
    }
    
    while(stack.length > 0){
        cur = stack[stack.length - 1]
        
        if (!cur.right || (lastNode && lastNode == cur.right)){
            if(!cur.left && !cur.right)
                ret.push(stack.map(n => n.val).join("->"))
            lastNode = stack.pop()
        } else if(cur.right){
            cur = cur.right
            while(cur){
                stack.push(cur)
                cur = cur.left
            }
        }
    }
    
    return ret
};
