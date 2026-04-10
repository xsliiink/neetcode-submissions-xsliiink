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

        //first find the mid of a linked list
        while(fast != null && fast.next != null){
            fast = fast.next.next;
            slow = slow.next;
        }

        //define curr here before we set it to null
        let curr = slow.next;

        //disconnect the first part of the list from the second
        slow.next = null;

        //now reverse
        let prev = null;
        
        //now swapping the elements
        while(curr != null){
            let nxt = curr.next;

            curr.next = prev;
            prev = curr;
            curr = nxt;
        }

        let first = head;
        let second = prev;

        while(second !== null){
            let tmp1 = first.next;
            let tmp2 = second.next;

            //change the vals
            first.next = second;
            second.next = tmp1

            //rewriting the values
            first = tmp1;
            second = tmp2;
        }
    }
}
