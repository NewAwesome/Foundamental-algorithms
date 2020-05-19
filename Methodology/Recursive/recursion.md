<!--
 * @Author: jiayufei
 * @Date: 2020-05-04 11:48:50
 * @LastEditors: jiayufei
 * @LastEditTime: 2020-05-19 23:36:07
 * @Description:
 -->

# **Recursion**

- 逆推
- 寻找递归结束条件
- 缩小问题规模，自我调用

> https://labuladong.gitbook.io/algo/suan-fa-si-wei-xi-lie/di-gui-xiang-jie#di-gui-xiang-jie

## **Question1. 二叉树给定路径和求满足的路径数**

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

## **Question2. 两两交换链表节点**

```
Refer to : ../LeetCode/24. Swap Nodes in Pairs
```

## **Question2'. 反转链表-递归**

```java
public ListNode reverseList(ListNode head) {
  // Ending Case: head==null 空链表情况； head.next==null 结束条件，调用到了最后一个链表node
  if( head==null || head.next==null ) {
    // 发生在最高层栈内，直接return 原本链表的最后一个元素，且后续调用栈内皆是传递这个node
    return head;
  }
  ListNode resultHead = reverseList(head.next);

  // 递归处理。只关注当前node的下一个节点指向自己，且将自身next指针置空。
  head.next.next = head;
  head.next = null;

  return resultHead;
}
```

## **Question3. 杨辉三角**

```
Refer to : ../LeetCode/118. Pascal's Triangle
```

## **Question4. Hanoi**

```Python
class Solution:
    def hanota(self, A: [], B: [], C: []) -> None:
        n = len(A[1])
        self.move(n, A, B, C)

    # A：origin盘  B：buffer盘  C：destination盘
    def move(self, n, A, B, C):
        if n == 1:
            temp = A[1][-1]  # 打印变量
            C[1].append(A[1][-1])
            A[1].pop()
            print(str(temp)+' move to '+C[0])
            return
        else:
            # 通过缓冲区C盘将A盘上边n-1个秤砣移动到B盘
            self.move(n-1, A, C, B)
            # 将A盘最后一个移动到C盘
            temp = A[1][-1]  # 打印变量
            C[1].append(A[1][-1])
            A[1].pop()
            print(str(temp)+' move to '+C[0])
            # 通过缓冲区A将B盘的n-1个秤砣移动到C盘
            self.move(n-1, B, A, C)

```

## **Question5. 逆序打印字符串**

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

## **Question6. 原地反转字符串**

### **Approach 1: Recursive**

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

### **Approach 2: Double pointer**

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

---

# **Recursion Memorization**

斐波那契数列在计算 F(4)时的所有计算路径图示：
![](https://leetcode-cn.com/explore/featured/card/recursion-i/258/memorization/Figures/recursion/fibonacci.png)
通过记忆化消除重复计算：使用哈希表存储 F(n)的值作为缓存。

## **Question1. Fibonacci**

```java
import java.util.HashMap;

public class Main {
  HashMap<Integer,Integer> cache = new HashMap<Integer,Integer>();

  private int fib(int N){
    if(cache.containKeys(N)){
      return cache.get(N);
    }
    int result;
    if(N < 2){
      result = N;
    } else {
      result = fib(N-1) + fib(N-2);
    }
    // keep the result in cache
    cache.put(N,result);
    return result;
  }
}
```

拓展：通过装饰者模式使得记忆化功能更加通用和非侵入性。（TODO:)

> https://www.cnblogs.com/of-fanruice/p/11565679.html

## **Question2. 爬楼梯**

```
Refer to : ../LeetCode/-1. Upstair
```

# **Divide and Conquer (DAC)**

- Divide
- Conquer
- Combine
