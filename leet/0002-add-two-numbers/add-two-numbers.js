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
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(-1)
    let last = dummy
    let addon = 0
    while (l1 || l2 || addon){
        let ret = (l1 ? l1.val : 0) + (l2? l2.val : 0) + addon 
        addon = ret > 9 ? 1 : 0
        
        let newNode = new ListNode(ret % 10)
        last.next = newNode
        last = last.next

        l1 = l1 ? l1.next : l1
        l2 = l2 ? l2.next : l2
    }
    return dummy.next
};
