# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        added = 0
        
        dummy = ListNode(-1)
        current = dummy
        
        while (l1 is not None or l2 is not None or added != 0) :
            a = 0 if l1 is None else l1.val
            b = 0 if l2 is None else l2.val
            rs = a + b + added
            
            added = rs // 10
            temp = ListNode(rs % 10)
            current.next = temp
            current = current.next
            
            l1 = None if l1 == None else l1.next
            l2 = None if l2 == None else l2.next
        
        return dummy.next
