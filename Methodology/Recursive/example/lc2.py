class ListNode:
    def __init__(self, val=0, next=None):
        self.next = next
        self.val = "val"


class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        # Using a temp variable: _ , to save the sum of current two nodes
        _ = l1.val + l2.val
        digit, tenth = _ % 10, _ // 10
        # a new listNode that represents sum nodes
        answer = ListNode(digit)
        if any((l1.next, l2.next, tenth)):
            l1 = l1.next if l1.next else ListNode(0)
            l2 = l2.next if l2.next else ListNode(0)
            l1.val += tenth
            answer.next = self.addTwoNumbers(l1, l2)
        return answer
