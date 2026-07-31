class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const visited = new Array(numCourses).fill(0);

        //build an adjacency matrix
        let adj = Array.from({length: numCourses}, () => []);

        for(let [course,req] of prerequisites){
            adj[course].push(req);
        }

        const dfs = (node) => {

            //found a cycle
            if(visited[node] == 1) return false;

            //this node is checked and there are no cycles
            if(visited[node] == 2) true;

            //mark the current node
            visited[node]  = 1;

            for(let pre of adj[node]){
                if(!dfs(pre)) return false
            }

            visited[node] = 2
            return true;
        }

        //call the dfs
        for(let i = 0;i < numCourses;i++){
            if(!dfs(i)) return false;
        }

        return true;
    }
}
