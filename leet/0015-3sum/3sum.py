class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        if nums is None or len(nums) < 3:
            return []
        
        length = len(nums)
        nums.sort()
        rs = []
        i = 0
        
        while i < length:
            target = 0 - nums[i]
            
            j = i + 1
            k = length - 1
            
            while j < k:
                sums = nums[j] + nums[k]
                if sums == target:
                    rs.append([nums[i], nums[j], nums[k]])
                    while j + 1 < k and nums[j] == nums[j + 1]:
                        j += 1
                    j += 1
                    while j < k - 1 and nums[k] == nums[k - 1]:
                        k -= 1
                    k -= 1
                elif sums > target:
                    while j < k - 1 and nums[k] == nums[k - 1]:
                        k -= 1
                    k -= 1
                else:
                    while j + 1 < k and nums[j] == nums[j + 1]:
                        j += 1
                    j += 1
                        
            while i + 1 < length and nums[i] == nums[i + 1]:
                i += 1
            i += 1
                        
        return rs
        
