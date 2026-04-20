/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {

        let fast = head;
        let slow = head;
        //find the mid first
        while(fast != null && fast.next != null){
            slow = slow.next;
            fast = fast.next.next;
        }

        //reverse the second half
        let prev = null;

        let curr = slow.next;

        slow.next = null;

        while(curr != null){
            let nxt = curr.next;
            curr.next = prev;
            prev = curr;
            
            curr = nxt;
        }

        //merge
        let first = head;
        let second = prev;
         
         while(second != null){
            let tmp1 = first.next;
            let tmp2 = second.next;

            first.next = second;
            second.next = tmp1;

            first = tmp1;
            second = tmp2;
         }
    }
}
