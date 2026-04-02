class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        //first we need to sort an arr
        const sorted = Array.from({length: n}, () => [])

        for( let [node,adj] of edges){
            sorted[node].push(adj);
            sorted[adj].push(node);
        }

        //create a map to store all the visited nodes
        const map = {}

        function dfs(currNode,parent){
            if(map[currNode] == 'v') return false;

            //marking the node as seen
            map[currNode] = 'v'

            //recersively checking the neighbors
            for(let neighbor of sorted[currNode]){
                if (neighbor == parent) continue;

                if(dfs(neighbor,currNode) == false) return false;
            }
            return true;
        }

        //checking for cycles 
        if(dfs(0,-1) === false) return false;

        //if we have painted the amount of nodes given than there are no estranged elements
        return n == Object.keys(map).length;

    }
}
