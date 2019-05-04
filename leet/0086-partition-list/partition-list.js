/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if (!head) return head
    
    let firstLess
    let less
    let firstGreat
    let great
    
    while(head){
        if (head.val < x){
            if (!less){
                less = head
                firstLess = head
            }else{
                less.next = head
                less = less.next
            }
        }else{
            if(!great){
                great = head
                firstGreat = head
            }else{
                great.next = head
                great = great.next
            }
        }        
        
        head = head.next
    }
    
    if(less) less.next = firstGreat
    if(great) great.next = null
    return firstLess || firstGreat
};
