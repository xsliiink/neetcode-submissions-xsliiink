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

        let oldToNew = new Map();

        function dfs(currNode){
            if(!currNode) return null;

            if(oldToNew.has(currNode)) return oldToNew.get(currNode);

            //create a new node and store it in the set
            let clone = new Node(currNode.val);
            oldToNew.set(currNode,clone);

            //now we need to set the neighbors and recursively create the clones for them
            for(let neighbor of currNode.neighbors){
                clone.neighbors.push(dfs(neighbor));
            }
            return clone
        }

        return dfs(node);
    }
}
