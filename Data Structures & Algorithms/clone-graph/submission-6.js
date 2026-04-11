/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        
        //crating a hasmap for storing all the new nodes
        let oldToNew = new Map();

        function dfs(node){
            //base case
            if(!node) return null;

            if(oldToNew.has(node)) return oldToNew.get(node);

            let new_node = new Node(node.val);
            oldToNew.set(node,new_node);


            //creating the neighbors for the new node
            for(let neighbor of node.neighbors){
                new_node.neighbors.push(dfs(neighbor));
            }

            return new_node;
        }

        return dfs(node)
    }
}
