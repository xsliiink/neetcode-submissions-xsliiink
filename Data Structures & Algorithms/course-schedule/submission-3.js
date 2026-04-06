class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {

        //first we need to transfer all the values to a prereq arr
        let adj = Array.from({length: numCourses}, () =>[])

        for(let [course,pre] of prerequisites){
            adj[course].push(pre)
        }

        //create a hasmap to mark the cells
        let visited = {};

        //dfs
        function dfs(currNode){
            if(visited[currNode] == 'b') return true;
            if (visited[currNode] == 'g') return false;

            //marking the node as visited
            visited[currNode] = 'g'

            //recursively calling the func on all the neighbors

            for(let neighbor of adj[currNode]){
                if(dfs(neighbor) == false) return false;
            }

            //if we got up to this point the loop is safe mark it black
            visited[currNode] = 'b';
            return true;
        }

        //calling dfs on all the elements
        for(let i =0; i< numCourses;i++){
            if(dfs(i) === false) return false;
        }
        return true
    }
}
