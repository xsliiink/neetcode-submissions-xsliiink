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

        let slow = head;
        let fast = head;

        //find the middle
        while(fast !== null && fast.next !== null){
            slow = slow.next;
            fast = fast.next.next;
        }

        //reverse the second half of the list
        let curr = slow.next;

        //unlinking the list from the seconf half
        slow.next = null;

        //swaping the values
        let prev = null
        while(curr != null){
            let nxt = curr.next;
            curr.next = prev;

            prev = curr;
            curr = nxt; 
        }


        //now link the lists
        let head1 = head;
        let head2 = prev

        while(head2 !== null){
            let nxt1 = head1.next;
            let nxt2 = head2.next;

            head1.next = head2;
            head2.next = nxt1;

            head1 = nxt1;
            head2 = nxt2;
        }

        return head
    }
}
