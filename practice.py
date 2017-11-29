# 11/29/2017
class Solution(object):
    def twoSum(self, nums, target):
        if len(nums) < 1:
            return false
        for i in range(len(nums)):
            for j in range(i+1, len(nums)):
                if nums[i] + nums[j] == target:
                    return [i,j]
x = Solution()
print(x.twoSum([3,2,4], 6))