class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        def getLength(s: int) -> (int, int):
            # find first 1
            while s < len(nums): 
                if nums[s] != 1: 
                    s += 1
                else:
                    break
                
            # calculate 1s length
            length = 0
            while s < len(nums): 
                if nums[s] == 1:
                    length += 1
                    s += 1
                else:
                    break
            return length, s
        
        rs = 0
        p = 0
        while p < len(nums):
            l, p = getLength(p)
            rs = max(rs, l)
        
        return rs
