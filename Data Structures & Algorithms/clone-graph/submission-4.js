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

        //creating a hashmap to store all the new nodes accesed by the old node
        const oldToNew = new Map();

        function dfs(node){
            if(!node) return null;

            if(oldToNew.has(node)) return oldToNew.get(node);

            //now we need to create a new node and push it to the oldToNew list
            let clone = new Node(node.val);

            oldToNew.set(node,clone)

            //now we need to add all the neighbors

            for(let neighbor of node.neighbors){
                clone.neighbors.push(dfs(neighbor));
            }
            return clone;
        }
        return dfs(node);
    }
}
