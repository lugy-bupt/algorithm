# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def constructMaximumBinaryTree(self, nums: List[int]) -> TreeNode:
        
        if nums is None or len(nums) == 0:
            return None
        
        if len(nums) == 1:
            return TreeNode(nums[0])
        
        index = -1
        
        for i in range(len(nums)):
            if index == -1 or nums[i] > nums[index]:
                index = i
                
        node = TreeNode(nums[index])
        
        node.left = self.constructMaximumBinaryTree(nums[0:index])
        node.right = self.constructMaximumBinaryTree(nums[index + 1:])
        
        return node

