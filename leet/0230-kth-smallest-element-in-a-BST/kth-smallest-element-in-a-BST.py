# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def kthSmallest(self, root: TreeNode, k: int) -> int:
        
        p = root
        stack = []
        
        while p is not None:
            stack.append(p)
            p = p.left
            
        while len(stack) > 0:
            p = stack.pop()
            k -= 1
            
            if k == 0 :
                return p.val
            
            p = p.right
            
            while p is not None:
                stack.append(p)
                p = p.left
