class Solution:
    def findLengthOfLCIS(self, nums: List[int]) -> int:
        length = len(nums)
        if length < 2:
            return length
        
        start = 0
        i = 0
        rs = 0
        
        while i < length - 1:
            if nums[i] >= nums[i + 1]:
                #cal
                rs = max(rs, i - start + 1)
                start = i + 1
            i += 1
        rs = max(rs, length - start)
        
        return rs
                
