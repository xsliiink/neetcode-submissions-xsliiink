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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {

        //we need to impement a stack for storing the nodes 
        const stack = []
        
        //we need an element for accessing the roots
        let currNode = root;

        //we need to loop through the nodes and store their values in a stack
        while(stack.length > 0  || currNode != null){

            //we need to push the left elements into the stack first
            while(currNode != null){
                //pushing the current node
                stack.push(currNode);

                //going into the left subtree
                currNode = currNode.left;
            }

            //getting the last element out of a stack
            currNode = stack.pop();
            
            //decrementing the k
            k--;

            //if founf the right element returning the node
            if(k == 0){
                return currNode.val;
            }

            //trying to access the right node
            currNode = currNode.right;

        }
    }
}
