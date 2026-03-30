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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {

        //first we need to create a dummy node to have a reference for the start of the new list
        let dummy = new ListNode(0);
        //then we need to create a tail that would point to the same list
        let tail = dummy;
        //we run through the both list while they are not empty
        while(list1 != null && list2 != null){
            //if list1.val < list2.val : attach the first list node to our tail
            if (list1.val <= list2.val){
                //move the head of the first list
                tail.next = list1;
                list1 = list1.next;
            }
            //else attach the second list node to our tail
            else{
                //move the head of the second list
                tail.next = list2;
                list2 = list2.next;
            }
            //moving our tail next
            tail = tail.next;
        }
        
        //if one of the lists has ended just attach the second after as it is already sorted
        tail.next = list1 != null ? list1 : list2;

        //return our dummy object
        return dummy.next;
    }
}
