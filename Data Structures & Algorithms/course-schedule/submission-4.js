class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        //first sort the arr of prereq
        let prereq = Array.from({length: numCourses},() => []);

        for(let [course,adj] of prerequisites){
            prereq[course].push(adj);
        }

        //hashset for storing visited nodes
        let visited = {}

        function dfs(node){
            if(visited[node] == 'g') return false;
            if(visited[node] == 'b') return true;

            visited[node] = 'g'

            //recursively check the neighbors
            for(let neighbor of prereq[node]){
                if(dfs(neighbor) == false) return false
            }

            //if we got up to this point the loop is safe return true
            visited[node] = 'b'
            return true;
        }

        //calling dfs on all the nodes
        for(let i = 0;i < numCourses;i++){
            if(dfs(i) === false) return false
        }

        return true;
    }
}
