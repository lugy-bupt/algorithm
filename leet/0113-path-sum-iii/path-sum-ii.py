# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def pathSum(self, root: TreeNode, sum: int) -> List[List[int]]:
        if root is None:
            return []
        
        if root.val == sum and root.left is None and root.right is None:
            return [[root.val]]
            
        rs = self.pathSum(root.left, sum - root.val) + self.pathSum(root.right, sum-root.val)
        for ls in rs:
            ls.insert(0, root.val)
            
        return rs
