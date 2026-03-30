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
     * @return {ListNode}
     */
    reverseList(head) {

        //first we need to check if the head is not empty
        if(head == null) return head;

        //we need to create a prev pointer to store the prev node
        let prev = null;
        //we need to create a curr to store the curr node
        let curr = head;

        //create a while loop to run through the linked list
        while(curr != null){
            //create a reference to the next node for curr
            let nextNode = curr.next;

            //set the curr.next pointer to point to prev
            curr.next = prev;

            //set prev to current node
            prev = curr;

            //set current to the next node
            curr = nextNode;

        }


        //return prev node
        return prev;
        
    }
}
