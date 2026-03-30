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
     * @return {number[][]}
     */
    levelOrder(root) {

        if(root == null){
            return [];
        }
        //we need to create an object for storing all the levels
        const result = [];

        //we need to create a queue
        const queue =[root];

        //we need to loop through the tree
        while(queue.length > 0){
            //getting the size of queue
            let size = queue.length;

            //current level arr
            let currLevel = [];

            //running a loop through this level
            for (let i = 0; i < size; i++){
                //getting the first node out
                let currNode = queue.shift();

                currLevel.push(currNode.val);
                if(currNode.left){
                    queue.push(currNode.left);
                }
                if(currNode.right){
                    queue.push(currNode.right);
                }
            }
            result.push(currLevel);
            
        }
    return result;
        
    }
}
