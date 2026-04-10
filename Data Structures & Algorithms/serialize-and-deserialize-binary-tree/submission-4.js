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
        
        //create an array for storing all the values
        let arr = [];

        function dfs(node){

            if(node == null){
                arr.push('N');
                return
            }

            arr.push(node.val.toString());

            //recursively call dfs on left and right
            dfs(node.left);
            dfs(node.right)
        }

        //calling dfs on root
        dfs(root);

        //convert it all to a string
        let result = arr.join(',');

        return result;
        
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {

        //split the str into an arr
        let arr = data.split(',')

        function dfs(){
            let val = arr.shift();

            if(val == 'N'){
                return null;
            }

            let node = new TreeNode(parseInt(val));

            //recursively calling the dfs
            node.left = dfs();
            node.right = dfs();

            return node
        }

        return dfs();
    }
}
