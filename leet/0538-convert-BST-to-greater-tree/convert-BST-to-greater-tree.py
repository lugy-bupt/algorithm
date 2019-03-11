# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def convertBST(self, root: TreeNode) -> TreeNode:
        
        if root is None:
            return root
        
        stack = []
        p = root
        currentValue = 0
        
        while p is not None:
            stack.append(p)
            p = p.right
        
        while len(stack) > 0:
            p = stack.pop()
            p.val += currentValue
            currentValue = p.val
            
            p = p.left
                
            while p is not None:
                stack.append(p)
                p = p.right
        
        return root
            
        
