"""
# Definition for a Node.
class Node:
    def __init__(self, val, children):
        self.val = val
        self.children = children
"""
class Solution:
    def levelOrder(self, root: 'Node') -> List[List[int]]:
        if root is None:
            return []
        
        queue = [root]
        rs = []
        
        while len(queue) > 0:
            temp = []
            rt = []
            for node in queue:
                rt.append(node.val)
                if node.children is not None:
                    temp += node.children
            rs.append(rt)
            queue = temp
            
        return rs
        
        
