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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        //creating an array for storing the values
        const arr = [];

        function dfs(node){

            //creating a base case
            if(node == null){
                arr.push('N');
                return
            }

            //action
            arr.push(node.val.toString());

            //recursive step,do the same for the left branch first and then for the right
            dfs(node.left);
            dfs(node.right);

        }

        //call the dfs for root
        dfs(root);

        //store the values in a string
        return arr.join(',');
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {

        //convert the str back to an arr
        let arr = data.split(',');

        function dfs(){
            //take the values from an array
            let val = arr.shift()

            if(val == 'N'){
                return null;
            }

            let node = new TreeNode(parseInt(val));
            node.left = dfs();
            node.right = dfs();

            return node;
        }

        return dfs();
    }
}
