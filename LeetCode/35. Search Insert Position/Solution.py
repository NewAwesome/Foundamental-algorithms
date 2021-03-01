from typing import List


class Solution:
    # binary search 自己的递归做法，写得比较丑陋
    def searchInsert(self, nums: List[int], target: int) -> int:
        res = self.helper(nums, 0, len(nums) - 1, target)
        return res

    def helper(self, nums, low: int, high: int, target: int) -> int:
        if low >= high:
            return low if target <= nums[low] else low + 1
        # // 除以并取绝对值
        mid = (low + high) // 2
        if target < nums[mid]:
            return self.helper(nums, low, mid, target)
        elif target > nums[mid]:
            return self.helper(nums, mid + 1, high, target)
        else:
            return mid

    # 学习下别人的写法（迭代）For input without duplicates
    def searchInsert2(self, nums, target):
        low, high = 0, len(nums) - 1
        while low <= high:
            mid = (low + high) // 2
            if target == nums[mid]:
                return mid
            if target > nums[mid]:
                low = mid + 1
            else:
                high = mid - 1
        return low

    # 学习下别人的写法（迭代）For input with duplicates
    def searchInsert3(self, nums, target):
        low, high = 0, len(nums) - 1
        while low <= high:
            mid = (low + high) // 2
            if target > nums[mid]:
                low = mid + 1
            else:
                if target == nums[mid] and target != nums[mid - 1]:
                    return mid
                else:
                    high = mid - 1

        return low


# a = int(5 / 2)  # _ _ _ _ _
# b = int(4 / 2)  # _ _ _ _
# print(a, b)
print(Solution().searchInsert([1, 3, 5, 6], 2))
print(Solution().searchInsert([1], 1))
# print(Solution().searchInsert([1, 3, 6, 7, 9], 10))
