<!--
 * @Author: jiayufei
 * @Date: 2020-05-04 11:48:50
 * @LastEditors: jiayufei
 * @LastEditTime: 2020-05-04 13:36:06
 * @Description:
 -->

# Recursion

- 逆推
- 寻找递归结束条件
- 缩小问题规模，自我调用

> https://labuladong.gitbook.io/algo/suan-fa-si-wei-xi-lie/di-gui-xiang-jie#di-gui-xiang-jie

## Question1.
```c++
/* 来源于 LeetCode PathSum III： https://leetcode.com/problems/path-sum-iii/ */
root = [10,5,-3,3,2,null,11,3,-2,null,1],
sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

Return 3. The paths that sum to 8 are:

1.  5 -> 3
2.  5 -> 2 -> 1
3. -3 -> 11

int pathSum(TreeNode root, int sum) {
  // Ending condition
  if(root == null) return 0;
  // split to root(computing)、left-child(self-call)、right-child(self-call)
  return count(root, sum) +
        pathSum(root.left, sum) + pathSum(root.right, sum);
}

int count(TreeNode node, int sum) {
  if(node == null) return 0;
  // Inside a tree, how many paths can sum to "int sum"?
  return (node.val == sum) +
      count(node.left, sum - node.val) + count(node.right, sum - node.val)
}
```

## Question2. 两两交换链表节点
```
Refer to : ../LeetCode/24. Swap Nodes in Pairs
```

---

# Divide and Conquer (DAC)

- Divide
- Conquer
- Combine
