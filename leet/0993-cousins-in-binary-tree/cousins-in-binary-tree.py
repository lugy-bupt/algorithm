# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def isCousins(self, root: TreeNode, x: int, y: int) -> bool:
        
        pathX = self.getPath(root, x)
        pathY = self.getPath(root, y)
        
        if len(pathX) != len(pathY) or pathX[-2] == pathY[-2]:
            return False
        
        return True
        
        
    def getPath(self, root: TreeNode, n: int) -> List[TreeNode]:
        if root is None:
            return []
        
        if root.val == n:
            return [root]
        
        result = self.getPath(root.left, n)
        if len(result) == 0:
            result = self.getPath(root.right, n)
            
        if len(result) != 0:
            result.insert(0, root)
            
        return result
        
