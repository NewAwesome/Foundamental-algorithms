from typing import List


class Solution:
    # 条件：
    #     1、数组 2、原地修改 ————> 双指针
    # 双指针：
    #     slow 指向本次要放置元素的位置
    #     fast 向后遍历所有元素
    def removeDuplicates(self, nums: List[int]) -> int:
        slow = 0
        for fast in range(len(nums)):
            if slow < 2 or nums[fast] != nums[slow - 2]:
                nums[slow] = nums[fast]
                slow += 1
        return slow

    # 通用 删除有序数组重复项，仅保留x个相同元素
    def removeDuplicatesCommon(self, nums: List[int], x) -> int:
        slow = 0
        for fast in range(len(nums)):
            if slow < x or nums[fast] != nums[slow - x]:
                nums[slow] = nums[fast]
                slow += 1
        return slow


print(Solution().removeDuplicates([1, 1, 1, 2, 2, 3]))
print(Solution().removeDuplicatesCommon([1, 1, 1, 2, 2, 3],1))
print(Solution().removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]))
