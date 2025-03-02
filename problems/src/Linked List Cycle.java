/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public boolean hasCycle(ListNode head) {
        ListNode current = head;
         int cont=0;
         while(current!=null){
          cont++;
          current=current.next;
             if (cont>10000) {
                 return true;
             }
         }
         return false;
    }
}