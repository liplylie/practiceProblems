# 11/29/2017
class Solution(object):
    def twoSum(self, nums, target):
        if len(nums) < 1:
            return false
        for i in range(len(nums)):
            for j in range(i+1, len(nums)):
                if nums[i] + nums[j] == target:
                    return [i,j]
    def twoSumRefactor(self, nums, target):
        if len(nums) < 1:
            return false
        hold = {}
        for i in range(len(nums)):
            if nums[i] in hold:
            	return [hold[nums[i]], i]
            else:
            	hold[target - nums[i]] = i
# x = Solution()
# print(x.twoSum([3,2,4], 6))
# print(x.twoSumRefactor([3,2,4], 6))