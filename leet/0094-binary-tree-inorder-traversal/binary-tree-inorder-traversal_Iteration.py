# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def inorderTraversal(self, root: TreeNode) -> List[int]:
        if root is None:
            return []
        
        stack = []
        p = root
        result = []
        
        while p is not None or len(stack) > 0:
            
            while p is not None:
                stack.append(p)
                p = p.left
            
            if len(stack) > 0:
                p= stack.pop()
                result.append(p.val)
                p = p.right
                
        return result
