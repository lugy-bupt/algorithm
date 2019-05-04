/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    
    let flat = function(node, prev){
        if(node){
            if(prev) node.prev = prev
            
            if(node.child){
                
                let child = flat(node.child, node)
                let cur = child
                while(cur.next) cur = cur.next
                
                cur.next = node.next
                node.next = child
                
                node.child = null
                
                flat(cur.next, cur)
            }
            else{
                flat(node.next, node)
            }
        }
        return node
    }
    
    return flat(head, null)
    
};
