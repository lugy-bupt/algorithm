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
var sumNumbers = function(root) {
    let stack = []
    let ret = 0

    let getNumber = function(node){
        if(!node) return

        if(!node.left && !node.right){
            ret += (stack.join("") + node.val) * 1
            return
        }

        stack.push(node.val)
        if(node.left) getNumber(node.left)
        if(node.right) getNumber(node.right)
        stack.pop()
    }

    getNumber(root)
    return ret
};
