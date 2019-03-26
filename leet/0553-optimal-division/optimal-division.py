class Solution:
    def optimalDivision(self, nums: List[int]) -> str:
        length = len(nums)
        if length == 0 : return ""
        elif length == 1 : return str(nums[0])
        elif length == 2 : return str(nums[0]) + "/" + str(nums[1])
        # elif length == 3 : return str(nums[0]) + "/(" + str(nums[1]) + "/" + str(nums[2]) + ")"
        else :
            return str(nums[0]) + "/(" + self.smallestDivision(nums[1:]) +")"
        
    def smallestDivision(self, nums: List[int]) -> str:
        length = len(nums)
        if length == 0 : return ""
        elif length == 1 : return str(nums[0])
        else:
            ret = str(nums[0])
            
            for i in range(1, len(nums)):
                ret += "/" + str(nums[i])
                
            return ret
