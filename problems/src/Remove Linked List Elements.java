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
    public ListNode removeElements(ListNode head, int val) {
        if(head==null)
        return null;

        ListNode anterior=head;
        ListNode actual = head;
      
        while(actual!=null){
        if(actual.val==val){
        anterior.next=actual.next;
        actual=actual.next;
        }else{
         anterior=actual;
          actual=actual.next;
        }
   

        }
    
      if(head.val ==val){
        return head.next;
      }

    return head;
    }
}