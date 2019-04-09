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
    ret = []
    nodes = []
    stack = []
    
    while(head){
        nodes.push(head)
        head = head.next
    }
    
    for(let i = nodes.length - 1; i >= 0; i--){
        while (stack.length > 0 && nodes[i].val >= stack[stack.length - 1].val){stack.pop()}
        if (stack.length == 0){ret.push(0)}
        else{ret.push(stack[stack.length - 1].val)}
        stack.push(nodes[i])
    }
    
    return ret.reverse()
};
