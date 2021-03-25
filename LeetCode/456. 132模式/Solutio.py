# 找子序列 i<j<k 满足 nums[i]<nums[k]<nums[j] 就是132模式子序列 (n的范围15000: 10^4)
from typing import List


class Solution:
    # O(n^2)
    # 思路：
    #     维护132模式的中间数字3 —— 第一层for循环持有
    #     维护数字1 —— 找特点: 贪心思路发现只要1是3左边的最小数字即可 -> 在第一层for循环中通过变量维护最小的1
    #     维护数字2 —— 无明显特点，需要全部遍历 -> 第二层for循环
    # 总结：
    #     本题，我的想法是直接3层。但其实找到132的特点后，可以发现第一层循环维护数字3的时候，此时数字1就可以利用第一层循环，通过一个min变量来维护
    #     （贪心思路，只要最小的数字1<数字3，就满足了条件）
    def find132pattern1(self, nums: List[int]) -> bool:
        N = len(nums)
        numsi = nums[0]  # 存储最小的1
        for j in range(1, N):
            for k in range(N - 1, j, -1):
                if numsi < nums[k] and nums[k] < nums[j]:
                    return True
            numsi = min(numsi, nums[j])
        return False


    # TC:O(n) SC:O(n)
    # 思路：单调栈
    #     维护数字3 —— for循环
    #     维护数字1 —— 在一层for循环中通过数组变量维护好每一个j对应的leftMin值即数字1
    #     维护数字2 —— O(n^2)方法中是通过嵌套的第二层for循环得到
    #                 分析特点：数字2是数字3右侧的、比数字3小的、最大的元素
    #     ————————————换句话说，当我们遍历 arr 到一个位置 i 的时候，需要找到 i 右边的所有元素中比 arr[i] 小的最大元素。单调栈就是用来解决此类问题
    #     ————————————单调栈实现原理：
    #     ————————————因为是找i右侧比它小的元素，所以从右向左遍历i，首次直接将arr[i]压栈，后续每次将arr[i]压栈之前，先比较 arr[i] 和 栈顶元素，
    #     ————————————如果栈顶元素<arr[i]：栈顶元素pop出栈；继续比较新的栈顶元素和 arr[i]，while循环直到栈顶元素>arr[i]
    #     ————————————【此时最后一个pop出栈的元素就是当前i位置右侧比它小的所有元素之中最大的那一个，因为栈是单调递减的，所以最后一个pop的元素值最大】
    #     ————————————然后arr[i]压栈，i递减进入下一次for循环
    #     ————————————【此刻栈是单调递减栈，因为栈顶元素小于arr[i]的都会被弹出，arr[i]压栈的时候也就是arr[i]比原栈顶元素更小的时候】
    def find132pattern2(self, nums: List[int]) -> bool:
        # TODO: 实现

# Test
Solution().find132pattern([1, 2, 3, 4])
Solution().find132pattern([3, 1, 4, 2])
Solution().find132pattern([-1, 3, 2, 0])
