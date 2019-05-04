/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function(pre, post) {
    if(pre.length > 0 && post.length > 0){ 
        let ret = new TreeNode(pre[0])
        if(pre.length == 1) return ret

        if(pre[1] == post[post.length - 2]){
            ret.left = constructFromPrePost(pre.slice(1), post.slice(0, post.length - 1))
            return ret
        }
        else{
            let idx = -1
            for (let i = 0; i < post.length - 1; i++){
                if(pre[1] == post[i]) {
                    idx = i
                    break
                }
            }
            
            let rIdx = -1
            for (let i = 1; i < pre.length; i++){
                if(post[post.length - 2] == pre[i]){
                    rIdx = i
                    break
                }
            }
            
            if(idx > -1)
                ret.left = constructFromPrePost(pre.slice(1, rIdx + 1), post.slice(0, idx + 1))
            if(rIdx > -1)
                ret.right = constructFromPrePost(pre.slice(rIdx), post.slice(idx, -1))
            
            return ret
        }
    }
};
