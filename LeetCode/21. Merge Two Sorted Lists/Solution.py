from ListNode import ListNode


class Solution:

    # Iteration
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        # create a var named 'head' node, used for point to head of the result LinkedList
        # create a var named 'cur' node, used for iteration point to the smaller node of l1 and l2.
        head = cur = ListNode()
        # iteration
        while l1 and l2:
            if l1.val < l2.val:
                cur.next = l1
                l1 = l1.next
            else:
                cur.next = l2
                l2 = l2.next
        cur.next = l1 or l2
        return head.next

    # Recursive
    # base case 是比较l1和l2的val值，如果l1.val更小，那么需要：1. l1.next指向下一个(因为不在本次base case 中，所以就指向递归调用);2. return l1
    def mergeTwoLists1(self, l1: ListNode, l2: ListNode) -> ListNode:
        # end case : l1 or l2 is None
        if not l1 or not l2:
            return l1 or l2
        # base case : compare l1.val and l2.val, the smaller one such as l1 will recursively be invoked with the arguments of l1.next and l2
        if l1.val < l2.val:
            l1.next = self.mergeTwoLists1(l1.next, l2)
            return l1
        else:
            l2.next = self.mergeTwoLists1(l1,l2.next)
            return l2