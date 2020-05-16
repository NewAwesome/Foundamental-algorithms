/* Linked list node DS */
class ListNode {
  int val;
  ListNode next;

  ListNode(int x) {
    val = x;
  }
}

public class Solution {
  public ListNode recursionSwap(ListNode head) {
    // edge case
    // Ending case
    if((head==null)||(head.next==null)){
      return head;
    }
    // deal swap
    ListNode firstNode = head;
    ListNode secondNode = head.next;

    // NOTE: 取出每次递归需要处理的节点1和节点2
    // NOTE: 节点2指向节点1
    // NOTE: 节点1指向节点2（原）的next，同时进入下一层递归，节点2作为参数head传入，处理节点3和4，处理完后返回节点4，在第一层递归中赋值给节点1（原）的next.
    // NOTE: 返回swap后的prev节点
    // self-call
    firstNode.next = recursionSwap(secondNode.next);
    secondNode.next = firstNode;
    
    return secondNode;
  }

  public ListNode IterationSwap(ListNode head){
    // dummy node作为虚拟的prevNode
    ListNode dummy = new ListNode(-1);
    dummy.next = head;

    ListNode prevNode = dummy;
    while((head!=null)&&(head.next!=null)){
      ListNode firstNode = head;
      ListNode secondeNode = head.next;

      prevNode.next = secondeNode;
      firstNode.next = secondeNode.next;
      secondeNode.next = firstNode;

      prevNode = firstNode;
      head = firstNode.next;
    }
    // dummy = prevNode, prevNode.next = secondeNode <=> dummy.next = secondNode
    return dummy.next;
  }

  /* Entry */
  public static void main(String[] args) {
    System.out.println(1);
  }
}