class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {

        //build an adjacency matrix
        let adj = Array.from({length: n}, () => []);

        for(let [node,neighbor] of edges){
            adj[node].push(neighbor);
            adj[neighbor].push(node);
        }

        const visited = new Set()

        //baics check
        if(edges.length !== n - 1) return false;

        //create a dfs
        const dfs = (node) => {

            //basic check
            if(visited.has(node)) return 

            //mark a node as vivited
            visited.add(node)

            //dfs into the neighbors
            for(let neighbor of adj[node]){
                dfs(neighbor);
            }
        }

        dfs(0);

        return visited.size === n
    }
}
