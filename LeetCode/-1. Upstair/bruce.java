/*
 * @Author: jiayufei
 * @Date: 2020-05-19 23:38:29
 * @LastEditors: jiayufei
 * @LastEditTime: 2020-05-20 22:44:05
 * @Description: Bruce force recursion
 */
public class Bruce {
  public int climbStairs(int n) {
    climb_Stairs(0, n);
  }

  public int climb_Stairs(int i, int n) {
    if (i > n) {
      return 0;
    }
    if (i == n) {
      return 1;
    }
    return climb_Stairs(i + 1, n) + climb_Stairs(i + 2, n);
  }
}