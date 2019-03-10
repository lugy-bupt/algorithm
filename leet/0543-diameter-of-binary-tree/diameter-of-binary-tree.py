# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def diameterOfBinaryTree(self, root: TreeNode) -> int:
        if root is None:
            return 0
        
        rs = 0
        if root.left is not None and root.right is not None:
            rs = self.getDepth(root.left) + self.getDepth(root.right) + 2
        elif root.left is not None:
            rs = self.getDepth(root.left) + 1
        elif root.right is not None:
            rs = self.getDepth(root.right) + 1
        
        return max(rs, max(self.diameterOfBinaryTree(root.left), self.diameterOfBinaryTree(root.right)))
        
        
    def getDepth(self, root:TreeNode) -> int:
        rs = 0
        if root is None or (root.left is None and root.right is None):
            rs = 0
        else:
            rs = max(self.getDepth(root.left), self.getDepth(root.right)) + 1
        
        return rs
