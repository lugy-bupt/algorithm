# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def findTilt(self, root: TreeNode) -> int:
        mm = {}
        self.sum(root, mm)
        return self.getTile(root, mm)
        
    def getTile(self, root: TreeNode, mm: dict):
        if root is None:
            return 0
        
        rs = abs(mm[root.left] - mm[root.right])
        rs += self.getTile(root.left, mm) + self.getTile(root.right, mm)
        return rs
        
    def sum(self, root:TreeNode, mm: dict) -> int:
        if root in mm:
            return mm[root]
        else:
            rs = 0
            if root is not None:
                rs = root.val + self.sum(root.left, mm) + self.sum(root.right, mm)
            mm[root] = rs
            return rs
