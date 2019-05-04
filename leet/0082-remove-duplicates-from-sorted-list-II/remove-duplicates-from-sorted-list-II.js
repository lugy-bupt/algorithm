/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let dummy = new ListNode(-1)
    dummy.next = head
    let pst = dummy

    while(pst.next){
        let next = pst.next
        while(next.next && next.val == next.next.val) next = next.next
        if(next != pst.next) pst.next = next.next
        else pst = pst.next
    }
    
    return dummy.next
};
