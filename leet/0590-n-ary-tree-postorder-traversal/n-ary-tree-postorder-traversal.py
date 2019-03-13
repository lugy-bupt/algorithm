"""
# Definition for a Node.
class Node:
    def __init__(self, val, children):
        self.val = val
        self.children = children
"""
class Solution:
    def postorder(self, root: 'Node') -> List[int]:
        if root is None:
            return []
        
        visited = set()
        stack = []
        p = root 
        rs = []
        
        while p is not None:
            stack.append(p)
            if p.children is not None and len(p.children) > 0:
                p = p.children[0]
            else:
                break
                
        while len(stack) > 0:
            p = stack.pop()
            
            if p.children is not None and len(p.children) > 0:
                notVisited = None
                for node in p.children:
                    if node not in visited:
                        notVisited = node
                        break
                if notVisited is None:
                    visited.add(p)
                    rs.append(p.val)
                else:
                    stack.append(p)
                    p = notVisited
                    
                    while p is not None:
                        stack.append(p)
                        if p.children is not None and len(p.children) > 0:
                            p = p.children[0]
                        else:
                            break
            else:
                visited.add(p)
                rs.append(p.val)
                
        return rs
