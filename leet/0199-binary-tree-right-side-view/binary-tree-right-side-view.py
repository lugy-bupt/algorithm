# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def rightSideView(self, root: TreeNode) -> List[int]:
        if root is None: return []
        
        queue = [root]
        ret = []
        
        while len(queue) > 0:
            ret.append(queue[-1].val)
            
            tempQ = []
            for n in queue:
                if n.left is not None:
                    tempQ.append(n.left)
                if n.right is not None:
                    tempQ.append(n.right)
            
            queue = tempQ
            
        return ret
        
