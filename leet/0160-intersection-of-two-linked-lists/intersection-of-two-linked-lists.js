/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let stackA = []
    let stackB = []
    
    while (headA){
        stackA.push(headA)
        headA = headA.next
    }
    
    while (headB){
        stackB.push(headB)
        headB = headB.next
    }
    
    let ret = null
    
    while(stackA.length > 0 && stackB.length > 0){
        let a = stackA.pop()
        let b = stackB.pop()
        
        if (a == b){
            ret = a
        }else{
            break
        }
    }
    
    return ret
};
