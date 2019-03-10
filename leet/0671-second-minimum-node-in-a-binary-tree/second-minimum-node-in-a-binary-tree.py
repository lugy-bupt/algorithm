# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def findSecondMinimumValue(self, root: TreeNode) -> int:
        rs = -1
        
        if root.left is not None:
            if root.val < root.left.val and root.val < root.right.val:
                rs = min(root.left.val. root.right.val)
            else:
                if root.val < root.left.val:
                    rr = self.findSecondMinimumValue(root.right)
                    rs = root.left.val if rr == -1 else min(root.left.val, rr)
                elif root.val < root.right.val:
                    rl = self.findSecondMinimumValue(root.left)
                    rs = root.right.val if rl == -1 else min(root.right.val, rl)
                else:
                    rs1 = self.findSecondMinimumValue(root.left)
                    rs2 = self.findSecondMinimumValue(root.right)
                
                    if rs2 == -1:
                        rs = rs1
                    elif rs1 == -1:
                        rs = rs2
                    else:
                        rs = min(rs1, rs2)
                
        return rs
            
