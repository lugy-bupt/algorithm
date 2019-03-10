# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def postorderTraversal(self, root: TreeNode) -> List[int]:
        if root is None:
            return []
        
        p = root
        stack = []
        lastVisit = None
        result = []
        
        while p is not None:
            stack.append(p)
            p = p.left
        
        while len(stack) > 0:
            p = stack.pop()
            
            if p.right is None or p.right == lastVisit:
                result.append(p.val)
                lastVisit = p
                
            else:
                stack.append(p)
                p = p.right
                
                while p is not None:
                    stack.append(p)
                    p = p.left
        
        return result
        
