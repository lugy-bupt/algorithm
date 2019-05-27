/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if(!root) return

    let left = root.left
    let right = root.right

    if (left){
        root.left = null
        root.right = left

        flatten(root.right)

        let cur = root
        while(cur.right){
            cur = cur.right
        } 
        
        cur.right = right
    } 

    flatten(right)
};
