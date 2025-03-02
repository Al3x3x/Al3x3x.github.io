class Solution {
    public ListNode deleteDuplicates(ListNode head) {
     ListNode current= head;
        while(current!=null){
            if (head!=current) {
              head.next= current;
            }

        current=current.next;         
        }
        return head;
    }
}