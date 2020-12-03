<!--
 * @Description  : 链表的递归心得
 * @Author       : jiayufei
 * @Date         : 2020-12-04 00:05:31
 * @LastEditors  : jiayufei
 * @LastEditTime : 2020-12-04 00:38:47
-->

# 单链表的递归

目前看到 Q2'反转链表 题，两个链表的递归都是将后面部分抽象为已知的单个 node 节点(代码体现就是递归函数的参数传入的是当前处理的 node 的 next)

1. 两两交换链表题目：后面部分抽象为有序链表，firstNode 的 next 指针 指向这个有序链表
2. 反转链表题目：后面部分抽象为有序链表，有序链表的 next 指针指向当前的 head 节点

# 递归的理解

- 提取 base case
  - `单链表`情况
    - 递进： 从 head 到 tail，压栈
    - 回归： 从 tail 回到 head，出栈
    - base case: 就是，前半部分还在栈中待处理，后半部分已经出栈了并且是处理完毕的
