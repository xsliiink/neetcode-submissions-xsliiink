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
    maxDepth(root) {
        //creating a stack
        const stack =  [[root,1]];

        //creating a maxCount
        let maxCount = 0;

        //running through a tree
        while(stack.length > 0){
            //getting the lement out of a stack
            let [currNode,depth] = stack.pop();

            if(!currNode) continue;

            maxCount = Math.max(maxCount,depth);

            stack.push([currNode.left,depth + 1]);
            stack.push([currNode.right,depth + 1]);
        }

        return maxCount;
    }
}
