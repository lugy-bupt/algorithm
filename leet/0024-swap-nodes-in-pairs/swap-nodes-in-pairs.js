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
var swapPairs = function(head) {
    let dummy = new ListNode()
    dummy.next = head
    
    let last = dummy
    
    while(last){
        let n1 = last.next
        if(!n1) break
        let n2 = n1.next
        if(!n2) break
        let next = n2.next
        
        last.next = n2
        n2.next = n1
        n1.next = next
        
        last = n1
    }
    
    return dummy.next
};
