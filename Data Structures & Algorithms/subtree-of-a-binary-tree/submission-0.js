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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        //we need to create a stack to loop through the first tree
        const stack = [root];
        

        while(stack.length > 0){
            //getting the node out of a root
            const node = stack.pop();
            if(node == null) continue;

            if(node.val == subRoot.val){
                if(this.isSameTree(node,subRoot)){
                    return true;
                }
            }

            stack.push(node.left);
            stack.push(node.right);
        }
    return false;       
    }

    isSameTree(p, q) {
        //we need to create to stacks to store the nodes
        const stack1 = [p];
        const stack2 = [q];

        //we need to loop through one of the stacks
        while(stack1.length > 0 && stack2.length > 0){
            //we need to get the elements out of the stacks
            let Node1 = stack1.pop();
            let Node2 = stack2.pop();

            if(Node1 == null && Node2 == null) continue;
            if(Node1 == null && Node2 != null) return false;
            if(Node1 != null && Node2 == null) return false;

            if(Node1.val != Node2.val) return false;

            stack1.push(Node1.left);
            stack1.push(Node1.right);

            stack2.push(Node2.left);
            stack2.push(Node2.right);
        }
    //return true if we checked everything
    return true;
    }
}
