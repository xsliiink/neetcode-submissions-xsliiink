class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {

        //First we need to convert the arr to a prerequistites arr
        const neighbors = Array.from({length: n},() => []);

        for( let [node,adj] of edges){
            neighbors[node].push(adj)
            neighbors[adj].push(node)
        }
            
        const map = {};
        let count = 0;

        function dfs(currNode){
            if(map[currNode] == 'g') return;
            
            map[currNode] = 'g'

            //recurisvey checking all the neighbors
            for(let neighbor of neighbors[currNode]){
                dfs(neighbor);
            }
        }

        //looping through the arr
        for(let i = 0;i < n;i++){
            if(!map[i]){
                count++;
                dfs(i);
            }
        }
        return count;
    }
}
