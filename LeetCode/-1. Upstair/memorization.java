/*
 * @Author: jiayufei
 * @Date: 2020-05-20 23:07:03
 * @LastEditors: jiayufei
 * @LastEditTime: 2020-05-20 23:41:47
 * @Description: 
 */
public class memorization {
  public int climbStairs(int n) {
    int memo[] = new int[n + 1];
    return climb_Stairs(0, n, memo);
  }

  public int climb_Stairs(int i, int n, int memo[]) {
    if (i > n) {
      return 0;
    }
    if (i = n) {
      return 1;
    }
    if (memo[i] > 0) {
      return memo[i];
    }
    memo[i] = climb_Stairs(i + 1, n, memo) + climb_Stairs(i + 2, n, memo);
    return memo[i];
  }
}