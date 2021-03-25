import sys

sys.path.append('..')
from common import ListNode

# 心得：
#     1、链表操作要理清思路再动手，在纸上画帮助理清思路，边界条件考虑到位，否则越写越烦（例如deleteDuplicates1错误示范，改改画画最终代码丑陋）
class Solution:
    # My Approach. WA（wrong answer)
    # failure case: [1,1]
    def deleteDuplicates1(self, head: ListNode) -> ListNode:
        # maintain a prev to indict last-previous node of current "while"
        prev = ListNode()
        prev.next = head

        # declare a res head
        real_head = ListNode()
        real_head.next = prev

        # side case
        if not head or not head.next:
            return head

        # maintain a flag to indict that if last while go in the "if head.val == head.next.val".
        flag = False

        while head.next:
            if head.val == head.next.val:
                head.next = head.next.next
                flag = True
            else:
                if flag:
                    prev.next = head.next
                    head = prev
                else:
                    prev = head
                head = head.next
                flag = False
        return real_head.next.next

    def deleteDuplicates2(self, head: ListNode) -> ListNode:
        # side case
        if not head or not head.next:
            return head

        # dummy node: In case of the LinkedList's head maybe deleted. 'dummy.next' will point to new head when origin head was deleted.
        dummy = ListNode(0)
        dummy.next = head

        # 提前想好要用几个辅助变量。本题很明显需要维护当前节点和当前节点的前一个节点一共俩，直接声明变量赋值，不要乱用head，会导致指向混乱。
        pre = dummy
        cur = head

        # 循环体为cur node节点
        while cur:
            # 碰到cur和cur.next值相等，直接将cur后移，直到不相等
            while cur.next and cur.val == cur.next.val:
                cur = cur.next
            # 以下是cur和cur.next值不相等的情况（此处方法是用if判断，因为假如没有发生过while cur后移操作的话，pre.next应当是指向cur的；而我自己的方法是增加flag变量，学！）
            if pre.next == cur:
                # 没有发生过while cur后移操作：直接将pre后移
                pre = pre.next
            else:
                # 发生过while cur后移操作：维护pre.next链，pre不用动
                pre.next = cur.next
            cur = cur.next
        return dummy.next

    # TODO: 1、递归 2、迭代,维护每个数字出现的次数，第二次遍历时将出现次数大于1的删除