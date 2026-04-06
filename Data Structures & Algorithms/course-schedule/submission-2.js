class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {

        let visited = {};

        //creating an adjacency list for prerequisites
        const adj = Array.from({length: numCourses}, () => []);

        //now we need to fill in this arr with values
        for(let [course,pre] of prerequisites){
            adj[course].push(pre);
        }

        function dfs(currNode){

            //base case
            if(visited[currNode] == 'g') return false;

            //the course is clean,exit
            if(visited[currNode] == 'b') return;

            //marking the cell
            visited[currNode] = 'g'

            //recursively calling the algorithm
            for(let neighbor of adj[currNode]){
                if(dfs(neighbor) === false) return false;
            }

            //if got up to this point then the loop is clean mark it black
            visited[currNode] = 'b'

            return true;
            
        }

        //looping through each value in an array
        for(let i = 0;i < numCourses;i++){
            if(dfs(i) === false) return false;
        }
        return true
    }
}
