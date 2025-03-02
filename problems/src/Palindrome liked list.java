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
    public boolean isPalindrome(ListNode head) {
            ArrayList <Integer> arr = new ArrayList();
              
              while(head.next!=null)
                  arr.add(head.val);
              
          for (int i = 0; i < arr.size(); i++) {
              System.out.println(arr.get(i));
         }
         return false;
    }
}