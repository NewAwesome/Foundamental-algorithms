import java.util.ArrayList;
import java.util.List;

/*
 * @Author: jiayufei
 * @Date: 2020-05-16 09:46:30
 * @LastEditors: jiayufei
 * @LastEditTime: 2020-05-16 10:13:23
 * @Description: 
 */
class Solution {
  public List<Integer> recursion(int rowIndex) {
    List<Integer> list = new ArrayList<>(rowIndex + 1);
    for (int i = 0; i < rowIndex + 1; i++) {
      list.add(recursionHelper(rowIndex + 1 - 1, i));
    }
    return list;
  }

  public Integer recursionHelper(int row, int column) {

    if (column == 0 || column == row) {
      return 1;
    }

    return recursionHelper(row - 1, column - 1) + recursionHelper(row - 1, column);
  }

  public static void main(String[] args) {
    System.out.println(new Solution().recursion(4));
  }
}