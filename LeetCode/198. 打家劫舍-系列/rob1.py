'''
@Author: jiayufei
@Date: 2020-05-24 23:20:17
@LastEditors: jiayufei
@LastEditTime: 2020-05-24 23:20:19
@Description: 
'''
class Solution(object):

  def rob(self, nums):
    size = len(nums)
    if size==0:
      return 0

    # 定义数组
    dp = [0 for _ in range(size+1)]

    dp[0] = nums[0]
    for i in range(1, size+1):
      dp[i] = max(dp[i-1],nums[i]+dp[i-2])

    return dp[size]

  # 优化空间至O(1)
  def rob_optimized(self, nums):
    size = len(nums)
    if size == 0:
      return 0

    dp0 = 0
    dp1 = nums[0]
    for i in range(1, size+1):
      dp0 = max(dp1,nums[i]+dp0)
      # 元组法交换两个变量的值
      dp0, dp1 = dp0, dp1