/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    let stack = []
    let cur = root
    let sum = 0

    while(cur){
        stack.push(cur)
        cur = cur.right
    }

    while(stack.length > 0){
        cur = stack.pop()
        sum += cur.val
        cur.val = sum

        if(cur.left){
            cur = cur.left

            while(cur){
                stack.push(cur)
                cur = cur.right
            }
        }
    }

    return root
};
