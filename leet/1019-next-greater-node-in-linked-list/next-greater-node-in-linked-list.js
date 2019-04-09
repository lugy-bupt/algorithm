/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
    if (!head){
        return []
    }

    let ret = []

    let findLarger = function(node){
        let current = node.val

        while(node){
            if (node.val > current){
                return node.val
            }
            node = node.next
        }

        return 0
    }

    while (head){
        ret.push(findLarger(head))
        head = head.next
    }

    return ret
};
