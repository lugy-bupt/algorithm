# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def rob(self, root: TreeNode) -> int:
        records = {}
        frecords = {}
        
        def dfs(root: TreeNode, robRoot: bool) -> int:
            if robRoot and root in records:
                return records[root]
            if not robRoot and root in frecords:
                return frecords[root]

            rs = 0
            if root is not None:
                if robRoot:
                    rs = max(root.val + dfs(root.left, False) + dfs(root.right, False), dfs(root.left, True) + dfs(root.right, True))
                else:
                    rs = dfs(root.left, True) + dfs(root.right, True)
            if robRoot:
                records[root] = rs
            else:
                frecords[root] = rs
            return rs
                
        return dfs(root, True)
        
