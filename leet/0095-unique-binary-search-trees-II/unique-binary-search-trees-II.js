/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    let generate = function(nums){
        if (nums.length == 0) return []
        if (nums.length == 1) return [new TreeNode(nums[0])]

        let ret = []
        for (let i = 0; i < nums.length; i++){
            let leftNodes = generate(nums.slice(0, i))
            let rightNodes = generate(nums.slice(i + 1))

            if (leftNodes.length == 0){
                for (let j = 0; j < rightNodes.length; j++){
                    let root = new TreeNode(nums[i])
                    root.right = rightNodes[j]
                    ret.push(root)
                }
            } else if(rightNodes.length == 0) {
                for (let j = 0; j < leftNodes.length; j++){
                    let root = new TreeNode(nums[i])
                    root.left = leftNodes[j]
                    ret.push(root)
                }
            } else{
                for (let j = 0; j < rightNodes.length; j++){
                    for (let k = 0; k < leftNodes.length; k++){
                        let root = new TreeNode(nums[i])
                        root.left = leftNodes[k]
                        root.right = rightNodes[j]
                        ret.push(root)
                    }
                }
            }
        }

        return ret
    }

    let nums = new Array(n)
    for (let i = 0; i < n; i++) nums[i] = i + 1
    return generate(nums)
};
