/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
    if (!root) return []
    
    let map = new Map()
    let ret = []
    
    let dfs = function(node, x, y){
        if(!node) return
        
        let arr = []
        if (map.has(x)) {
            arr = map.get(x)
        }else{
            map.set(x, arr)
        }
        
        arr.push({"val":node.val, "y":y})
        
        dfs(node.left, x - 1, y + 1)
        dfs(node.right, x + 1, y + 1)
    }
    
    dfs(root, 0, 0)
    
    let keys = []
    for (let key of map.keys()) {
        keys.push(key)
    }
    keys.sort((a, b) => a - b)
    
    for (let key of keys){
        let value = map.get(key)
        ret.push(value.sort((a, b) => {
            if (a.y == b.y) return a.val - b.val
            return a.y - b.y
        }).map(v => v.val))
    }
    
    return ret
};
