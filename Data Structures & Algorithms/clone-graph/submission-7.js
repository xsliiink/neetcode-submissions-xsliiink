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
        //base case
        if(!node) return null

        //create a vivited set
        let visited = new Map();
        
        //we need the dfs
        const dfs = (node) => {

            //base case
            if(visited.has(node)) return visited.get(node);

            //create a copy of that node
            let newNode = new Node(node.val);
            visited.set(node,newNode);

            //create a copy of its neighbors
            for(let neighbor of node.neighbors){
                newNode.neighbors.push(dfs(neighbor))
            }

            return newNode;
        }
        return dfs(node)
    }
}
