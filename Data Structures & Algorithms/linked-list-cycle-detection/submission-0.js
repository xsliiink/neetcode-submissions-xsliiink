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
     * @return {boolean}
     */
    hasCycle(head) {

        //we need to create two ruinning elements
        let slow = head;
        let fast = head;

        //while the fast elemet is not null and it's pointer is not null
        while(fast != null && fast.next != null){
            slow =  slow.next;
            fast = fast.next.next;

            ///if these two meet me found a loop
            if (slow == fast){
                return true;
            }
        }

        return false;

    }
}
