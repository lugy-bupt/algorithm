# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def lowestCommonAncestor(self, root, p, q):
        """
        :type root: TreeNode
        :type p: TreeNode
        :type q: TreeNode
        :rtype: TreeNode
        """
        pathP = []
        stackP = []
        
        pathQ = []
        stackQ = []
        
        self.dfs(root, p, pathP, stackP)
        self.dfs(root, q, pathQ, stackQ)
        
        i = 0
        
        while i < len(pathP) and i < len(pathQ) and pathP[i] == pathQ[i]:
            i += 1
        
        return pathP[i - 1]
        
    def dfs(self, root, p, result, stack):
        if root is None:
            return False
        
        rs = False
        stack.append(root)
        if root.val == p.val:
            result += stack
            rs = True
        else:
            rs = self.dfs(root.left, p, result, stack) or self.dfs(root.right, p, result, stack)
        stack.pop()
        return rs
