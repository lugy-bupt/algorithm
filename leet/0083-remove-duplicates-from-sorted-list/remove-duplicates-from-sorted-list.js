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
    let last = head
    
    while (last){
        let cur = last
        while(cur && cur.val == last.val)
            cur = cur.next
        
        last.next = cur
        last = last.next
    }
    
    return head
};
