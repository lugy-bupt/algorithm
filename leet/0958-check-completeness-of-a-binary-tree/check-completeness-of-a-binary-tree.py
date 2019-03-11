# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def isCompleteTree(self, root: TreeNode) -> bool:
        if root is None:
            return False
        
        queue = [root]
        
        while len(queue) > 0:
            n = queue.pop(0)
            if n is None:
                while len(queue) > 0:
                    n = queue.pop(0)
                    if n is not None:
                        return False
                return True
            
            else:
                queue.append(n.left)
                queue.append(n.right)
            
        return True
        
        
