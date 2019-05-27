/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
        if(!head || m == n ) return head
    let dummy = new ListNode()
    dummy.next = head

    let rev = dummy
    let rev1 = dummy
    let last = dummy
    let cur = head
    let counter = 1

    while(cur){
        let next = cur.next
        if(counter == m){
            rev = last
            rev1 = cur
        } else if(counter > m && counter <= n){
            cur.next = last
            if (counter == n) {
                rev.next = cur
                rev1.next = next
            }
        } else if(counter > n){
            break
        }

        last = cur
        cur = next
        counter += 1
    }

    return dummy.next
};
