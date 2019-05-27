/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(!preorder || preorder.length == 0) return null

    let r = preorder[0]
    let root = new TreeNode(r)

    if(preorder.length == 1) return root

    let rootIndex = inorder.findIndex((value) => value == r)
    if (rootIndex == 0){
        root.right = buildTree(preorder.slice(1), inorder.slice(1))
    } else if(rootIndex == inorder.length - 1) {
        root.left = buildTree(preorder.slice(1), inorder.slice(0, inorder.length - 1))
    } else{
        root.left = buildTree(preorder.slice(1, rootIndex + 1), inorder.slice(0, rootIndex))
        root.right = buildTree(preorder.slice(rootIndex + 1), inorder.slice(rootIndex + 1))
    }

    return root
};
