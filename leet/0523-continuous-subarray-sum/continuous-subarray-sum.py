class Solution:
    def checkSubarraySum(self, nums: List[int], k: int) -> bool:
        if len(nums) < 2: return False
        for i in range(len(nums)):
            if i + 1 < len(nums) and nums[i] == 0 and nums[i + 1] == 0: return True
        
        if k == 0: return False
        if k < 0: k = -k
        
        
        su = 0
        di = {0:-1}
        
        for i in range(len(nums)):
            su += nums[i]
            x = su % k
            if x in di: 
                if i - di[x] > 1:
                    return True
            else:
                di[x] = i
            
        return False
        
