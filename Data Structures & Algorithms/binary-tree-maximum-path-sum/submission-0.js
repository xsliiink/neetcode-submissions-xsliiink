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
     * @return {number}
     */
    maxPathSum(root) {
        let maxCount = -Infinity;

        const getCount = (node) => {
            //if the node is empty do not count it in
            if (!node) return 0;


            let left = Math.max(0,getCount(node.left));
            let right = Math.max(0,getCount(node.right));

            //checking if the current tree has the maxVal
            let currMax = node.val + left + right;
            maxCount = Math.max(maxCount,currMax);

            return node.val + Math.max(left,right);
        }

        getCount(root);
        return maxCount;
    }
}
