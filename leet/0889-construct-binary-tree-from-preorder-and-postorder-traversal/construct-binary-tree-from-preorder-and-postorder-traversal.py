# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def constructFromPrePost(self, pre: List[int], post: List[int]) -> TreeNode:
        if pre is None or len(pre) == 0 or post is None or len(post) == 0 or len(pre) != len(post):
            return None;
        
        if len(pre) == 1:
            return TreeNode(pre[0])
        
        root = TreeNode(pre[0])
        left = pre[1]
        right = post[-2]
        
        if left == right:
            root.left = self.constructFromPrePost(pre[1:], post[0:-1])
        else:
            rightIndexInPre = -1
            for i in range(len(pre)):
                if pre[i] == right:
                    rightIndexInPre = i
                    break
                    
            leftInfexInPost = -1
            for i in range(len(post)):
                if post[i] == left:
                    leftInfexInPost = i
                    break
            
            root.left = self.constructFromPrePost(pre[1:rightIndexInPre], post[0 : leftInfexInPost + 1])
            root.right = self.constructFromPrePost(pre[rightIndexInPre:], post[leftInfexInPost + 1 : -1])
            
        return root
                
