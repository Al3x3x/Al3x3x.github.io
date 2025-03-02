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
    public ListNode mergeInBetween(ListNode list1, int a, int b, ListNode list2) {
      ListNode A = list1;
      ListNode B = list1;
      ListNode X = list2;
      ListNode Y = list2;
      int cont=0;
    
     while(a!=1){
    A=A.next;
      a--;
     }
     while(b+1!=0){
      B=B.next;
      b--;
     }
    
    while(Y.next!=null){
        Y=Y.next;
    }
    
    A.next=X;
    Y.next=B;
    


  
   return list1;
    }
}