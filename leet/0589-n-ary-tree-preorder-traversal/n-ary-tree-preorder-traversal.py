"""
# Definition for a Node.
class Node:
    def __init__(self, val, children):
        self.val = val
        self.children = children
"""
class Solution:
    def preorder(self, root: 'Node') -> List[int]:
        if root is None:
            return []
        
        stack = []
        p = root
        rs = []
        visited = set()
        
                    
        while p is not None:
            rs.append(p.val)
            stack.append(p)
            
            if p.children is not None and len(p.children) > 0:
                p = p.children[0]
            else:
                break
        
        while len(stack) > 0:
            p = stack.pop()
            if p.children is None or len(p.children) == 0:
                visited.add(p)
            else:
                unvisited = None
                for node in p.children:
                    if node not in visited:
                        unvisited = node
                        break
                if unvisited is None:
                    visited.add(p)
                else:
                    stack.append(p)
                    p = unvisited
                    
                    while p is not None:
                        rs.append(p.val)
                        stack.append(p)
            
                        if p.children is not None and len(p.children) > 0:
                            p = p.children[0]
                        else:
                            break
                
        return rs
                
