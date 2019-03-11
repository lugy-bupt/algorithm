# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def smallestFromLeaf(self, root: TreeNode) -> str:
        if root is None:
            return ""
        
        p = root
        stack = []
        lastVisit = None
        
        strs = []
        
        while p is not None:
            stack.append(p)
            p = p.left
            
        while len(stack) > 0:
            p = stack[-1]
            
            if p.right is None:
                if p.left is None:
                    ll = list(map(lambda x: chr(97 + x.val), stack))
                    ll.reverse()
                    strs.append("".join(ll))
                lastVisit = p
                stack.pop()
            elif p.right == lastVisit:
                lastVisit = p
                stack.pop()
            else:
                # stack.append(p)
                p = p.right
                while p is not None:
                    stack.append(p)
                    p= p.left
        strs.sort()
        return strs[0]
            
