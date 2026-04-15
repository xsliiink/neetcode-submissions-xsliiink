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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        //first find the mid of the list
        let dummy = new ListNode(0,head);

        let slow = dummy;
        let fast = dummy;

        for(let i = 0; i< n;i++){
            fast = fast.next;
        }

        while(fast != null && fast.next != null){
            slow = slow.next;
            fast = fast.next;
        }

        //now rempve the node
        slow.next = slow.next.next;

        return dummy.next;
    }
}
