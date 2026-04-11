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
            
            let tmp1 = node.right;

            node.right = node.left;
            node.left = tmp1;

            dfs(node.left);
            dfs(node.right);

            return node;
        }
        return dfs(root);
    }
}
