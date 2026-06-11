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
        let fast = head

        //find the half of the list
        while(fast != null && fast.next != null ){
            slow = slow.next;
            fast = fast.next.next;
        }

        //reverse the second half

            //disconnect the first & second halves
            let curr = slow.next;
            slow.next = null;

            let prev = null

            //swap the values
            while(curr != null){
                let nxt = curr.next;
                curr.next = prev;
                prev = curr;

                curr = nxt;
            }
        //mere the lists
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
