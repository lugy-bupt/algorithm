class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        if nums is None or len(nums) < k:
            return 0
        
        sums = 0
        for x in range(k):
            sums += nums[x]
        rs = sums / k
        
        for y in range(k, len(nums)):
            sums += nums[y]
            sums -= nums[y - k]
            
            rs = max(rs, sums / k)
            
        return rs
