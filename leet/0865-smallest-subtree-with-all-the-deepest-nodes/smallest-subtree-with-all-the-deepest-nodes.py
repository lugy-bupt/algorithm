# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def subtreeWithAllDeepest(self, root: TreeNode) -> TreeNode:
        if root is None:
            return None
        
        queue = [root]
        while len(queue) > 0:
            temp = []
            for i in queue:
                if i.left is not None:
                    temp.append(i.left)
                if i.right is not None:
                    temp.append(i.right)
            if len(temp) == 0:
                break
            queue = temp
            
        pathes = []
        for i in queue:
            pathes.append(self.getPath(root, i))
            
        if len(pathes) == 0:
            return None

        path0 = pathes[0]
        rs = None
        for i in range(len(path0)):
            for path in pathes:
                if path[i] != path0[i]:
                    return rs
                
            rs = path0[i]
        
        return rs
    
    def getPath(self, root: TreeNode, p: TreeNode) -> List[TreeNode]:
        if root is None:
            return []
        
        if root.val == p.val:
            return [root]
        
        result = self.getPath(root.left, p)
        if len(result) == 0:
            result = self.getPath(root.right, p)
        if len(result) != 0:
            result.insert(0, root)
            
        return result
        

        
