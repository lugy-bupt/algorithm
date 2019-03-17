class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        nums.sort()
        
        rs = 0
        for i in range(len(nums)):
            if i % 2 == 0:
                rs += nums[i]
                
        return rs
