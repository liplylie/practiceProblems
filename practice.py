# 12/9/2017
class Solution(object):
	def rotate(self, matrix):
		matrix = matrix[::-1]
		for x in range(len(matrix)):
			for y in range(x+1, len(matrix)):
				temp = matrix[x][y]
				matrix[x][y] = matrix[y][x]
				matrix[y][x] = temp
		return matrix

x = Solution()
# print(x.rotate([[1,2,3],[4,5,6],[7,8,9]]))
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

# list_of_lists = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]]
# for list in list_of_lists:
# 	for x in list:
		# print x
# 1/19/2018
class Solution2(object):
	def addDigits(self, num):
		"""
		:type num: int
		:rtype: int
		"""
		numStr = str(num)
		while(len(numStr) > 1):
			numArr = list(numStr)
			print(numArr, 'numArr')
			sum = 0
			for n in range(0,len(numArr)):
				sum += int(numArr[n])
				
			numStr = str(sum)
		return int(numStr)

x = Solution2()

print(x.addDigits(32))

