from typing import List


class Solution:
    # TC:O(n^2);SC:O(1)
    # bruce force
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i, iVal in enumerate(nums):
            for j, jVal in enumerate(nums[i + 1:]):
                # 对于内层循环来说，实际的下标 == j+i+1
                if iVal + jVal == target:
                    print([i, j + i + 1])
                    return [i, j + i + 1]

    # TC:O(n); SC:O(n)
    # Hash table: Exchange space for time
    def twoSum1(self, nums: List[int], target: int) -> List[int]:
        temp = {}
        for i, iVal in enumerate(nums):
            temp[iVal] = i
        for i, iVal in enumerate(nums):
            if temp.get(target - iVal):
                print([i, temp[target - iVal]])
                return [i, temp[target - iVal]]


Solution().twoSum1([2, 7, 11, 15], 9)
Solution().twoSum1([3, 2, 4], 6)
Solution().twoSum1([3, 3], 6)
