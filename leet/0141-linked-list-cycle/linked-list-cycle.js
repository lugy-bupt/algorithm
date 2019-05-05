/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head || !head.next) return false

    let fast = head.next.next
    let slow = head.next

    while (fast && slow){
        if(fast == slow) return true
        slow = slow.next
        fast = fast.next ? fast.next.next : null
    }
    return false
};
