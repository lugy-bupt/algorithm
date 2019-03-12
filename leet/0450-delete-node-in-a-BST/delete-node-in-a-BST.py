# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def deleteNode(self, root: TreeNode, key: int) -> TreeNode:
        if root is None:
            return root
        
        if root.val > key:
            root.left = self.deleteNode(root.left, key)
            return root
        
        if root.val < key:
            root.right = self.deleteNode(root.right, key)
            return root
        
        # delete
        if root.left is None and root.right is None:
            return None
        
        if root.left is None:
            return root.right
        
        if root.right is None:
            return root.left
        
        p = root.left
        while p.right is not None:
            p = p.right
        
        root.val = p.val
        root.left = self.deleteNode(root.left, root.val)
        return root
