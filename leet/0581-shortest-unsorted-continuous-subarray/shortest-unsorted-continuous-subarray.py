class Solution:
    def findUnsortedSubarray(self, nums: List[int]) -> int:
        x = sorted(nums)
        start = - 1
        end = -1
        for i in range(len(nums)):
            if x[i] != nums[i]:
                if start == -1: 
                    start = i
                end = i
        if start == end:
            return 0
        return end - start + 1                
        
