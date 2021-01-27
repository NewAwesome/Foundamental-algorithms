class Solution(object):
    def twoSum(self, nums, target):
        dic = dict()
        for index,value in enumerate(nums):
            sub = target - value
            if sub in dic:
                return [dic[sub],index]
            else:
                dic[value] = index

a = Solution.twoSum(1,2);
print(a)