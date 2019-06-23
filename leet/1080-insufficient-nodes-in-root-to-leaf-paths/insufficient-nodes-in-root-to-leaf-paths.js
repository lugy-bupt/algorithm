/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} limit
 * @return {TreeNode}
 */
var sufficientSubset = function(root, limit) {
    let stack = []
    let current = root
    let pre = null
    
    var cal = function(node){
        if(node.left || node.right || stack.length == 0){
            return
        }
        
        let rs = stack.map(n => n.val).reduce((a, b) => a + b) + node.val
        //console.log(stack.length, rs)
        if(rs < limit){
            while(stack.length > 0){
                let parent = stack.pop()
                if (parent.left === node) parent.left = null
                if (parent.right === node) parent.right = null
                if(parent.left || parent.right){
                    stack.push(parent)
                    break
                }else{
                    node = parent
                }
            }
        }
    }
    

    while(current){
        stack.push(current)
        current = current.left
    }

    while(stack.length > 0){
        let node = stack.pop()      

        if(!node.right || (pre && pre == node.right)){
            cal(node)
            pre = node
        }else{
            stack.push(node)
            node = node.right

            while(node){
                stack.push(node)
                node = node.left
            }
        }
    }

    if(root.left || root.right || root.val >= limit) return root
    return null    
};
