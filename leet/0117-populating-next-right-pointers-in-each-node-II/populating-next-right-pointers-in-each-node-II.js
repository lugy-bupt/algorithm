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
        let getNextChild = function(node){
        while(node.next){
            if(node.next.left) return node.next.left
            if(node.next.right) return node.next.right
            node = node.next
        }
        return null
    }

    let _connect = function(node, first){
        if(node){
            if(node.left && node.right) {
                node.left.next = node.right
                node.right.next = getNextChild(node)
            } else if(node.left){
                node.left.next = getNextChild(node)
            } else if(node.right){
                node.right.next = getNextChild(node)
            }

            _connect(node.next, first)
        }else{
            if (first){
                if (first.left) _connect(first.left, first.left)
                else if(first.right) _connect(first.right, first.right)
                else{
                    let firstChild = getNextChild(first)
                    _connect(firstChild, firstChild)
                }
            }
        }
    }

    _connect(root, root)
    return root
};
