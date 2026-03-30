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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        
        let preIndex = 0;

        //saving all the values from the inorder arr
        const inorderMap = new Map();
        inorder.forEach((val,inx) => inorderMap.set(val,inx));

        //helper function to assist us with the boundaries
        const helper = (inStart,inEnd) => {

            //if start is bigger than the end there are no values in this pile
            if(inStart > inEnd){
                return null;
            }

            //taking the current val from preorder
            let rootVal = preorder[preIndex];
            let node = new TreeNode(rootVal);

            //moving on to the next index
            preIndex++;

            //looking for where this val is in the Inorder arr
            let index = inorderMap.get(rootVal);

            //getting the left half sorted
            node.left = helper(inStart,index - 1)

            //getting the right half sorted 
            node.right = helper(index + 1,inEnd);

            //sticking all the values back together
            return node;
        }

        //
        return helper(0,inorder.length - 1);
    }
}
