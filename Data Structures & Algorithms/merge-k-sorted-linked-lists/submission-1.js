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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if(!lists || lists.length == 0) return null;

        //while there is still more than one element in the list keep connecting them
        while(lists.length > 1){
            let mergedLists = [];

            for(let i = 0; i< lists.length;i +=2){
                let l1 = lists[i];
                let l2 = (i + 1 < lists.length) ? lists[i + 1] : null;

                mergedLists.push(this.mergeTwo(l1,l2));
            }
            //quarter finals
            lists = mergedLists;
        }
        return lists[0];
    }

    //first we need to create a helper function to merge the lists
        mergeTwo(l1,l2){
            let dummy = new ListNode(0);
            let curr = dummy;

            while(l1 && l2){
                if(l1.val < l2.val){
                curr.next = l1;
                //ckecking if the next node of l1 is less than l2
                l1 = l1.next;

            }else{
                curr.next = l2;
                l2 = l2.next
            }

            curr = curr.next;
            }
            //if one of the lists has ended just link the second one to it
            curr.next = l1 || l2
            return dummy.next;
        }
}
