# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def preorderTraversal(self, root: TreeNode) -> List[int]:
        if root is None:
            return []
        
        p = root
        stack = []
        result = []
        
        while p is not None or len(stack) > 0:
            
            while p is not None:
                stack.append(p)
                result.append(p.val)
                p = p.left
                
            if len(stack) > 0:
                p = stack.pop()
                p = p.right
                
        return result
