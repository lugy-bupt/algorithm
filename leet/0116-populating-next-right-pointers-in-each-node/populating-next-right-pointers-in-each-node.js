/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    let _connect = function(node, first){
        if(node){
            if(node.left) node.left.next = node.right
            if(node.right && node.next) node.right.next = node.next.left
            _connect(node.next, first)
        }else{
            if(first) 
                _connect(first.left, first.left)
        }
    }

    _connect(root, root)
    return root
};
