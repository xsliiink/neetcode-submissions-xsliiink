class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        //create an adj list
        const adj = Array.from({length: n},() => []);

        for( let [edge,neighbor] of edges){
            adj[edge].push(neighbor);
            adj[neighbor].push(edge);
        }

        //create a hasmap to store the visited nodes
        let visited = {}

        function dfs(node,parent){
            if(visited[node] == 'g') return false;
            
            //marking the node as visited
            visited[node] = 'g'

            //calling the dfs on all the neigbor edges
            for(let neigbor of adj[node]){

                if(neigbor == parent) continue;
                if(dfs(neigbor,node) == false) return false;
            }

            //if we got up to here return true;
            return true;
        }

        return dfs(0,-1) && Object.keys(visited).length == n
    }
}
