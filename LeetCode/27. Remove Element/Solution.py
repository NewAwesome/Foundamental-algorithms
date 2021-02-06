from typing import List


class Solution:
    # 解法灵感来自24题的双指针法
    def removeElement(self, nums: List[int], val: int) -> int:
        if not nums:
            return
        slow = fast = 0
        while fast < len(nums) - 1:
            if nums[fast] != val:
                nums[slow] = nums[fast]
                slow += 1
            fast += 1
        print(nums[:slow])
        return slow + 1


Solution().removeElement([3, 2, 2, 3], 3)
Solution().removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)
