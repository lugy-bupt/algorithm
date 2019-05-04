/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode()
    let last = dummy
    
    while(l1 && l2){
        if (l1.val < l2.val) {
            last.next = l1
            l1 = l1.next
        }else{
            last.next = l2
            l2 = l2.next
        }
        last = last.next
    }
    
    last.next = l1 ? l1 : l2
    return dummy.next
};
