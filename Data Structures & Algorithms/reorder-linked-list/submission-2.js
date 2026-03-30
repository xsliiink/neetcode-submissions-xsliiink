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

        //first we need to set to pointers to find the middle
        let slow = head;
        let fast = head;

        while(fast !== null && fast.next !== null){
            slow = slow.next;
            fast = fast.next.next;
        }

        //once the middle is found reverse the second half of the list
        let prev = null;
        let curr = slow.next;

        //separating the second part of the list from the first one
        slow.next = null;

        while(curr !== null){
            //so we do not loose the rest of the tail
            let nxt = curr.next;

            //taking the first 
            curr.next = prev;
            prev = curr;
            curr = nxt;
        }

        let first = head;
        let second = prev;

        while(second !== null){
            let tmp1 = first.next;
            let tmp2 = second.next;

            //changing the values
            first.next = second;
            second.next = tmp1;

            //rewriting the values
            first = tmp1;
            second = tmp2;
        }
    }
}
