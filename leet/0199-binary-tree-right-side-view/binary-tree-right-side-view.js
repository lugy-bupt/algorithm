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
var rightSideView = function(root) {
    if (!root) return []
    
    let ret = []
    
    let temp = [root]
    
    while(temp.length > 0){
        ret.push(temp[temp.length - 1].val)
        
        let newT = []
        for (let n of temp){
            if (n.left) newT.push(n.left)
            if (n.right) newT.push(n.right)
        }
        temp = newT
    }
    
    return ret
};
