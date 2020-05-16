<!--
 * @Author: jiayufei
 * @Date: 2020-05-04 11:48:50
 * @LastEditors: jiayufei
 * @LastEditTime: 2020-05-05 12:24:44
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

**Q1：print a string in reverse order**

0. End condition: `index > str.length-1`
1. deal with str[1...n-1]
2. deal with str[2...n-1]
3. when `index = n-1`,then in next self-call it will execute `return`. Then the call stack back to upper which `index = n-1` and execute `print(str[n-1])`.

```java
private static void printReverse(char[] str) {
  helper(0,str);
}

private static void helper(int index, char[] str) {
  if(str == null || index >= str.length) {
    return;
  }
  helper(index + 1, str);
  System.out.print(str[index]);
}
```

**Q1'：reverse a string in-place**

### Approach 1: Recursive

1. Assign two pointer, respectively head & tail
2. if head >= tail, do nothing.
3. otherwise, swap the value of head & tail pointer.

```java
class Solution {
  public void helper(char[] str, int head, int tail) {
    if(head>=tail){
      return;
    }
    char temp = str[head];
    str[head++] = str[tail];
    str[tail--] = temp;
    // recursive call
    helper(str,head,tail)
  }

  public void reverseString(char[] str) {
    helper(str,0,str.length-1)
  }
}
Time: O(N) (N/2 times swap)
Space: O(N)
```

### Approach 2: Double pointer

```java
class Solution {
  public void reverseString(char[] str) {
    int head = 0, tail = str.length - 1;
    while(head < tail) {
      char temp = str[head];
      str[head++] = str[tail];
      str[tail--] = temp;
    }
  }
}
Time: O(N)
Space: O(1)
```

**Q2：两两交换链表中的节点**

# Divide and Conquer (DAC)

- Divide
- Conquer
- Combine
