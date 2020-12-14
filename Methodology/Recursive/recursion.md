<!--
 * @Author: jiayufei
 * @Date: 2020-05-04 11:48:50
 * @LastEditors  : jiayufei
 * @LastEditTime : 2020-12-04 00:22:33
 * @Description:
 -->

# **Recursion**

- 逆推
- 寻找递归结束条件
- 缩小问题规模，自我调用

思路：

1. end case
2. return
3. base case

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

/**
  pathSum
  1. 二叉树经典递归法：分别处理左右子树以及root根节点
*/
int pathSum(TreeNode root, int sum) {
  // Ending condition
  if(root == null) return 0;
  // split to root(computing)、left-child(self-call)、right-child(self-call)
  return count(root, sum) +
        pathSum(root.left, sum) + pathSum(root.right, sum);
}

/**
  count函数——计算以当前node为根节点出发的所有满足sum和为8的路径总数。
*/
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

【【【【 https://zhuanlan.zhihu.com/p/86745433 】】】】

1. end case: node.next 为 null
2. return: 因为反转链表的最后一个节点next需要值为null值，考虑返回当前节点并且当前节点的next置为null值
3. base case: 尝试分离出base case————(current.next).next指向自己实现反转，current.next置空(反转只需要一步,自身的下一个指向自身即可实现链表后半部分反转，前面部分并不包括在本次base case中)

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

- Hanoi塔问题，要注意的是recursion递归处理需要“顾头顾尾”，迭代中不需要关注

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

---

# **尾递归**

Characteristic:

- 递归函数 `xxFunc()` 中`return xxFunc();`，没有多余的计算。
- 函数参数中带有 acc 累加器，用于统计求和作为最终结果返回，最终结果的 return 位置在递归链尾部（非尾递归则是需要走完递归调用返回链，到达最顶部之后 return 最终结果）
- C/C++编译器支持尾递归优化，这为我们节省递归调用栈；Java、Python 不支持尾递归优化。

```java
尾递归/非尾递归计算数组求和（介绍思路，实际java并不支持）
public class Main {

  private static int helper_non_tail_recursion(int start, int [] ls) {
    if (start >= ls.length) {
      return 0;
    }
    // not a tail recursion because it does some computation after the recursive call returned.
    return ls[start] + helper_non_tail_recursion(start+1, ls);
  }

  public static int sum_non_tail_recursion(int [] ls) {
    if (ls == null || ls.length == 0) {
      return 0;
    }
    return helper_non_tail_recursion(0, ls);
  }

  //---------------------------------------------

  private static int helper_tail_recursion(int start, int [] ls, int acc) {
    if (start >= ls.length) {
      return acc;
    }
    // this is a tail recursion because the final instruction is the recursive call.
    return helper_tail_recursion(start+1, ls, acc+ls[start]);
  }

  public static int sum_tail_recursion(int [] ls) {
    if (ls == null || ls.length == 0) {
      return 0;
    }
    return helper_tail_recursion(0, ls, 0);
  }
}

```

---

# **Divide and Conquer (DAC)**

- Divide
- Conquer
- Combine
