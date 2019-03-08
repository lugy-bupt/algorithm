# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def pathSum(self, root: TreeNode, sum: int) -> int:
        if root is None: 
            return 0
        
        rs = self.findSum(root, sum)
        
        rs += self.pathSum(root.left, sum)
        rs += self.pathSum(root.right, sum)
        
        return rs
    
    def findSum(self, root: TreeNode, sum:int) -> int:
        if root is None: 
            return 0
        
        diff = sum - root.val
        rs = 0
        
        if diff == 0:
            rs += 1
        rs += self.findSum(root.left, diff)
        rs += self.findSum(root.right, diff)
        
        return rs
