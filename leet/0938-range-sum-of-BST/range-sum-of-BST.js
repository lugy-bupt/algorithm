/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    if (!root || L > R) return 0

    let stack = []
    let node = root
    let ret = 0

    while(node){
        stack.push(node)
        node = node.left
    }

    while(stack.length > 0){
        node = stack.pop()
        if(node.val > R){
            break
        }else if (node.val >= L){
            ret += node.val
        } 

        if (node.right){
            node = node.right

            while(node){
                stack.push(node)
                node = node.left
            }
        }
    }
    
    return ret
};
