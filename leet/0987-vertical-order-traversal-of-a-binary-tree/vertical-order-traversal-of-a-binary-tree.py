# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
from operator import itemgetter

class Solution:
    def verticalTraversal(self, root: TreeNode) -> List[List[int]]:
        if root is None:
            return []
			
        mm = {}
        self.dst(root, 0, 0, mm)
        ll = list(map(lambda y: y[1], sorted(mm.items(), key=lambda x: x[0])))
        return list(map(lambda y: self.getList(y), ll))
    
    def getList(self, ll: List) -> List[str]:
        return list(map(lambda x: x[1], sorted(ll, key=itemgetter(0,1))))
        
    
    def dst(self, root: TreeNode, curX: int, curY: int, mm: dict):
        if root is None:
            return
        
        if curX in mm:
            mm[curX].append((curY, root.val))
        else:
            mm[curX]=[(curY, root.val)]
            
        self.dst(root.left, curX - 1, curY + 1, mm)
        self.dst(root.right, curX + 1, curY + 1,mm)
        
