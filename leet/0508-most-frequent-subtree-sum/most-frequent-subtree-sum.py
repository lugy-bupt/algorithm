# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def findFrequentTreeSum(self, root: TreeNode) -> List[int]:
        record = {}
        self.getSum(root, record)
        
        values = {}
        
        for value in record.values():
            if value in values:
                values[value] += 1
            else:
                values[value] = 1
                
        time = 0
        rs = []
        
        for value, t in values.items():
            if time < t:
                time = t
                rs = [value]
            elif time == t:
                rs.append(value)
            
        return rs
        
    def getSum(self, root: TreeNode, record: dict) -> int:
        if root is None:
            return 0
        if root in record:
            return record[root]
        
        rs = root.val
        rs += self.getSum(root.left, record) + self.getSum(root.right, record)
        record[root] = rs
        return rs
