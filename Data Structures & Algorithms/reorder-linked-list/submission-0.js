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
        //first we need to find the middle of an array
        let fast = head;
        let slow = head;

        while(fast != null && fast.next != null){
            fast =fast.next.next;
            slow = slow.next
        }

        //now slow is pointing to the middle,reverse the second half       

        let prev = null;
        let curr = slow.next;
        //aslo we need to separate the first half of the list from the second half of it
         slow.next = null;

        while(curr != null){
            let nxt = curr.next;
            curr.next = prev;
            prev = curr
            curr = nxt;
        }

        //after reversing move the positions
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
