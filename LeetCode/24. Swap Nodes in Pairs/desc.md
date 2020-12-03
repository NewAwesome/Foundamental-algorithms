<!--
 * @Description  :
 * @Author       : jiayufei
 * @Date         : 2020-09-21 08:04:14
 * @LastEditors  : jiayufei
 * @LastEditTime : 2020-12-03 23:34:57
-->

# Q24 Swap Nodes in Pairs

Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes, only nodes itself may be changed.

Example 1:

```
Given 1->2->3->4, you should return the list as 2->1->4->3.
```

# 1、 递归解法 伪代码思路

1. 找 end case：递归到只剩一个或者一个都没有的 node 的情况
2. 找 return：返回的是已经包括当前 base case 的排序完成的链表
3. 分析 base case：base case 中的三部分(firstNode、secondNode、后续有序链表)，first->后续；second->first 即可。很明显，这里的"后续有序链表"就是调用递归函数后的返回结果

```java
ListNode recursionSwap(ListNode head){
  // 异常情况
  if( head不存在 ){
    return head;
  }
  // 1、end case
  if( head不存在 || head.next不存在 ) {
    return head;
  }

  ListNode firstNode = head;
  ListNode secondNode = head.next;

  // 3、exchange
  // firstNode.next 指向下一个元组中的secondNode
  firstNode.next = recursionSwap(secondNode.next)
  secondNode.next 指向 firstNode

  // 2、return
  return secondNode;
}
```
