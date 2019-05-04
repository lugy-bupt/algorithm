/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next) return head
    let list = []
    
    while(head){
        list.push(head)
        head = head.next
    }
    
    let mov = k % list.length
    if(mov == 0) return list[0] 
    
    list[list.length - mov - 1].next = null
    list[list.length - 1].next = list[0]
    return list[list.length - mov]
};
