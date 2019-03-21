class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        length = len(nums)
        if length < 2 : return

        index = -1
        for i in range(length - 1, -1, -1):
            if i > 0 and nums[i] > nums[i - 1]:
                index = i - 1
                break
                
        if index !=  -1:
            for i in range(length - 1, -1, -1):
                if nums[i] > nums[index]:
                    nums[i], nums[index] = nums[index], nums[i]
                    nums[index + 1:] = sorted(nums[index + 1:])
                    return
        
        nums.sort()
