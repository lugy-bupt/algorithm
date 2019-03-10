# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def increasingBST(self, root: TreeNode) -> TreeNode:
        nodes = self.midTranversal(root)
        
        start = None
        last = None
        for node in nodes:
            node.left = None
            node.right = None
            
            if last is None:
                start = node
            else:
                last.right = node
            last = node
            
        return start
        
        
    def midTranversal(self, root: TreeNode) -> List[TreeNode]:
        if root is None:
            return []
        
        rs = []
        stack = []
        
        p = root
        
        while p is not None:
            stack.append(p)
            p = p.left
            
        while len(stack) > 0:
            p = stack.pop()
            rs.append(p)
            
            if p.right is not None:
                p = p.right
                
                while p is not None:
                    stack.append(p)
                    p = p.left
                    
        return rs
        
