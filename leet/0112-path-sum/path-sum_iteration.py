# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def hasPathSum(self, root: TreeNode, sum: int) -> bool:
        if root is None:
            return False
        
        stack = []
        p = root
        pLastVisit = None
        
        while p is not None:
            stack.append(p)
            p = p.left
            
        while len(stack) > 0:
            p = stack[-1]
            
            if p.right is None or p.right == pLastVisit:                
                # cal path sum = sum ?
                if p.left is None and p.right is None:
                    x = sum 
                    for node in stack:
                        x -= node.val
                    if x == 0:
                        return True
                
                pLastVisit = stack.pop()
                
            else:
                p = p.right
                
                while p is not None:
                    stack.append(p)
                    p = p.left
                    
        return False
