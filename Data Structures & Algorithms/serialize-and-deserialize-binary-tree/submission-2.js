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
        let result = [];

        function dfs(node){
            if(node === null){
                result.push('N');
                return;
            }

            result.push(node.val.toString());

            dfs(node.left);
            dfs(node.right);
        }

        dfs(root);

        //converting an arr to a string
        return result.join(',');
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        let vals = data.split(',');
        let prev = null;

        function dfs(){
            let val = vals.shift();

            if(val === 'N'){
                return null;
            }

            let node = new TreeNode(parseInt(val));
            node.left = dfs();
            node.right = dfs();

            return node;
        }

        return dfs()
    }
}
