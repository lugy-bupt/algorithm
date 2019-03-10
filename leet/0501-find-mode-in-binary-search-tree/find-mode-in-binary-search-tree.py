# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def findMode(self, root: TreeNode) -> List[int]:
        mm = {}
        self.dst(root, mm)
        
        current = 0
        rs = []
        
        for k, v in mm.items():
            if v > current:
                current = v
                rs = [k]
            elif v == current:
                rs.append(k)
                
        return rs
        
    def dst(self, root: TreeNode, mm: dict):
        if root is None:
            return
        
        if root.val in mm:
            mm[root.val] += 1
        else:
            mm[root.val] = 1
        
        self.dst(root.left, mm)
        self.dst(root.right, mm)
