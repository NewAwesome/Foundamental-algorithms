from collections import OrderedDict
from typing import List


class Solution:
    # Trick. nums[:] is 'slice assignment', which satisfies 'in-place'
    def removeDuplicates(self, nums: List[int]) -> int:
        nums[:] = sorted(set(nums))
        return len(nums)

    # Trick
    def removeDuplicates1(self, nums: List[int]) -> int:
        nums[:] = OrderedDict.fromkeys(nums).keys()
        return len(nums)

    # Normal: 好好品，别人写的很妙的解法
    def removeDuplicates2(self, nums: List[int]) -> int:
        if not nums:
            return
        slow = fast = 0
        while fast < len(nums) - 1:
            if nums[slow] != nums[fast]:
                nums[slow + 1] = nums[fast]
                slow += 1
            fast += 1
        return slow + 1


print(Solution().removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
