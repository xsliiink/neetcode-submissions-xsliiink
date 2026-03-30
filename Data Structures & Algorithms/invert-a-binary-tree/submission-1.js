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
     * @return {TreeNode}
     */
    invertTree(root) {

        if (root == null) return null;
        //we need to loop through the tree and swap the left element with the right one 
        const stack = [root];

        while(stack.length != 0){

            let node = stack.pop();

            if (node == null) continue;

            let temp = node.right

            node.right = node.left;
            node.left = temp;

                stack.push(node.left);
                stack.push(node.right);
             

        }
        //we need tio reapeat this for the other consecutive steps
        return root;

    }

    
}
