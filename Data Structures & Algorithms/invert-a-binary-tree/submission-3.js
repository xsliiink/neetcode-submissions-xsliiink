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


        function dfs(node){
            if(!node) return null;

            let tmp1 = node.left;
            let tmp2 = node.right;

            node.right = tmp1;
            node.left = tmp2;

            dfs(node.left);
            dfs(node.right);

        }

        dfs(root)
        return root
    }
}
