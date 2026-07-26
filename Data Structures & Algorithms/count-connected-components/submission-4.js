class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let count = 0;
        let visited = new Set();

        //creating an empty arr
        let adj = Array.from({length : n}, () => []);

        for(let [edge,neighbor] of edges){
            adj[edge].push(neighbor);
            adj[neighbor].push(edge);
        }

        const dfs = (node) => {

            //mark the node
            visited.add(node)

            //going through the curr node neighbors
            for(let neighbor of adj[node]){
                if(!visited.has(neighbor)){
                    //dfs in there
                    dfs(neighbor)
                }
            }
            
        }

        //now going through all the nodes
        for(let i = 0;i < n;i++){
            if(!visited.has(i)){
                //found a new node
                count++;
                dfs(i);
            }
        }

        return count;
    }
}
