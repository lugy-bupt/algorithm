class Solution:
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        rs = []
        dist = {}
        
        for i in range(len(nums)):
            if target - nums[i] in dist.keys():
                rs.append(i)
                rs.append(dist[target - nums[i]])
                return rs
            else :
                dist[nums[i]] = i
        
        return rs
