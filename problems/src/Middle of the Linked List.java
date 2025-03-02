/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode middleNode(ListNode head) {
         int cont = 0;
        ListNode current = head;
        while (current != null) {
            cont++;
            current = current.next;
        }
            cont = (cont / 2) ;
            while (cont != 0) {
                head = head.next;
                cont--;
            }
            return head;
    }
}