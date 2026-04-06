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

        if(!lists || lists.length == 0) return null

        //for loop with i += 2
        while(lists.length > 1){
            let mergedLists = [];

            for(let i = 0; i < lists.length;i += 2){

                let l1 = lists[i];
                let l2 = (i + 1 < lists.length) ? lists[i + 1] : null;

                mergedLists.push(this.mergeTwo(l1,l2))
            }


            //now we need to do the same thing for the remaining lists
            lists = mergedLists;
        }
        return lists[0];
    }

    mergeTwo(l1,l2){
            let dummy = new ListNode(0);
            let tail = dummy;


            while (l1 && l2){
                if(l1.val > l2.val){
                    tail.next = l2;
                    l2 = l2.next
                }else{
                    tail.next = l1;
                    l1 = l1.next;
                }

                //always moving the tail
                tail = tail.next;
            }

            //if one of the lists has ended just add the second half to it
            tail.next = l1 || l2;

            return dummy.next;
        }
}
