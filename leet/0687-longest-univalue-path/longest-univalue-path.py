# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def longestUnivaluePath(self, root: TreeNode) -> int:
        if root is None:
            return 0
        
        rs = self.getDepthUnivalue(root.left, root.val) + self.getDepthUnivalue(root.right, root.val)
        
        rl = self.longestUnivaluePath(root.left)
        rr = self.longestUnivaluePath(root.right)
        
        return max(rs, max(rl, rr))
    
    def getDepthUnivalue(self, root: TreeNode, value: int) -> int:
        if root is None or root.val != value:
            return 0
        
        return 1 + max(self.getDepthUnivalue(root.left, value),self.getDepthUnivalue(root.right, value))
