class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        //sort the arr
        let neighbors = Array.from({length: n}, () => []);
        for( let [node,adj] of edges){
            neighbors[node].push(adj);
            neighbors[adj].push(node);
        }

        let visited = {}

        function dfs(currNode,parent){
            //base case
            if(visited[currNode] == 'g') return false

            visited[currNode] = 'g'

            //calling the recursive dfs on neighbors
            for(let neighbor of neighbors[currNode]){
                if(neighbor == parent) continue;
                
                if (dfs(neighbor,currNode) == false) return false;
            }
            return true;
        }

        //checking for cycles
        if(dfs(0,-1) === false) return false;

        //how many nodes have we painted?
        return n == Object.keys(visited).length;


    }
}
