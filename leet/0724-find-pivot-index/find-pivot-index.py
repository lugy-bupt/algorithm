class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        if nums is None or len(nums) == 0: return -1
        if len(nums) == 1: return 0
        if len(nums) == 2: return -1
        
        left, right = 0, 0
        for i in nums: right += i
        
        for i in range(len(nums)):
            if i > 0:
                left += nums[i - 1]
            right -= nums[i]
            
            if left == right:
                return i
        return -1
