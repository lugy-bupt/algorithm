# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def isValidBST(self, root: TreeNode) -> bool:
        if root is None:
            return True
        
        rs = self.checkLess(root.left, root.val) and self.checkLarger(root.right, root.val)
        rs = rs and self.isValidBST(root.left) and self.isValidBST(root.right)
        return rs        
    
    def checkLess(self, root: TreeNode, v: int) -> bool:
        return root is None or (root.val < v and self.checkLess(root.left, v) and self.checkLess(root.right, v))
    
    def checkLarger(self, root: TreeNode, v: int) -> bool:
        return root is None or (root.val > v and self.checkLarger(root.left, v) and self.checkLarger(root.right, v))
