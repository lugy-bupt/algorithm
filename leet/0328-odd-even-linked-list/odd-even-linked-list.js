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
var oddEvenList = function(head) {
    if (!head || !head.next) return head
    
    let odd
    let oddFirst
    let even
    let evenFirst
    
    for (let i = 0; head != null; head = head.next, i++){
        if (i % 2 == 0){
            if(odd){
                odd.next = head
                odd = odd.next
            }else{
                odd = head
                oddFirst = odd
            }
        }else{
            if(even){
                even.next = head
                even = even.next
            }else{
                even = head
                evenFirst = even
            }
        }        
    }
    
    odd.next = evenFirst
    if(even) even.next = null
    return oddFirst
    
};
