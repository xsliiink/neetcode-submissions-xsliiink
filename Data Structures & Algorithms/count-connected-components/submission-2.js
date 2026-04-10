class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        //sorting the array first
        const sorted = Array.from({length: n },() => []);

        for(let [elem,adj] of edges){
            sorted[elem].push(adj);
            sorted[adj].push(elem);
        }

        //crate a hashmap for storing visited nodes
        const map = {}
        let count = 0;

        //now create a dfs function
        function dfs(node){
            //base cases
            if(map[node] == 'v') return

            //action
            map[node] = 'v'

            //recursive step,checking the heighors
            for(let neighbor of sorted[node]){
                dfs(neighbor);
            }
        }

        //looping through
        for(let i = 0; i< n;i++){
            if(!map[i]){
                dfs(i);
                count++;
            }
        }
        return count
    }
}
