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
var detectCycle = function(head) {
    if(!head || !head.next) return null

    let fast = head.next.next
    let slow = head.next
    let met = null

    while (fast && slow){
        if(fast == slow) {
            met = fast
            break
        }
        slow = slow.next
        fast = fast.next ? fast.next.next : null
    }

    if(!met) return null

    let loopLength = 1
    fast = fast.next
    while (fast != met){ 
        loopLength += 1 
        fast = fast.next
    }

    fast = head
    slow = head

    while(loopLength > 0){
        fast = fast.next
        loopLength--
    }

    while(fast != slow){
        fast = fast.next
        slow = slow.next
    }
    return fast
};
