# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def widthOfBinaryTree(self, root: TreeNode) -> int:
        if root is None:
            return 0
        
        queue = [{"n": root, "p": 0}]
        rs = 0
        
        while len(queue) != 0:
            n = len(queue)
            rs = max(rs, queue[-1]["p"] - queue[0]["p"] + 1)
            
            for i in range(n):
                node = queue.pop(0)
                if node["n"].left is not None:
                    queue.append({"n": node["n"].left, "p": node["p"] * 2})
                if node["n"].right is not None:
                    queue.append({"n": node["n"].right, "p": node["p"] * 2 + 1})
            
        return rs
        
