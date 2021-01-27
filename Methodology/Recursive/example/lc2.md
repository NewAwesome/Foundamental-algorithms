# Add Two Numbers
Example:
![](https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg)

Input: l1 = [2,4,3], l2 = [5,6,4]

Output: [7,0,8]

Explanation: 342 + 465 = 807.

# 解法1: addTwoNumbers
递归。
1. 只要不满足以下全部条件就不结束：l1.next为None,l2.next为None,l1和l2的val之和没有进位
2. 返回值为和节点listNode，单链表只需要每次递归中用当前listNode.next指向下一次递归函数返回值即可在最后一层递归中返回整个链表的首节点
3. base case即为处理相加以及进位，进位直接加到l1.next的value值当中(这修改了原链表中的值，但并不影响本题的解题)