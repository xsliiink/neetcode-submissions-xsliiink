/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {
        //we need to create a queue to store all the nodes
        const queue = [{currNode: root, min: -Infinity,max: Infinity}];

        //we need to loop through all the nodes
        while(queue.length > 0){
            //we need to get the curr node out of a queue,node.min and max
            let {currNode,min,max} = queue.shift();

            //we need to comapre that node with the min and max vals
            if(currNode.val <= min || currNode.val >= max){
                return false;
            }

            //we need to push the nodes into the queue and set the new min and max
            
            //pushing the left element
            if(currNode.left != null){
                queue.push({currNode: currNode.left,min: min,max: currNode.val});
            }
            
            //pushing the right element
            if(currNode.right != null ){
                queue.push({currNode: currNode.right,min: currNode.val,max: max});
            }
        }
        return true;
    }
}
