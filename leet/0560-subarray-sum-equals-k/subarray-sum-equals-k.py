class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:        
        if len(nums) == 0 : return 0
        
        sums, ret = 0,0
        dicts = {0:1}
        
        for i in nums:
            sums += i
            x = sums - k
            if x in dicts:
                ret += dicts[x]
            if sums in dicts:
                dicts[sums] += 1
            else:
                dicts[sums] = 1
            
        return ret
