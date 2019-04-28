/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoMaxTree = function(root, val) {
    let addNode = function(root, node){
        if (!root) return node
        
        if (node.val > root.val){
            node.left = root
            return node
        }
        else{
            root.right = addNode(root.right, node)
            return root
        }
    }

    let node = new TreeNode(val)
    return addNode(root, node)
};
