class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {

        const pacificVisited = new Set();
        const atlanticVisited = new Set();

        let rows = heights.length;
        let cols = heights[0].length;

        let result = [];


        function dfs(r,c,visited,prevHeight){

            let key = `${r},${c}`

            if( r < 0 || c < 0 || r >= rows || c >= cols || heights[r][c] < prevHeight || visited.has(key)){
                return;
            }

            //marking the current cell as visited
            visited.add(key);

            //recursively call the func on all the other cells
            dfs(r + 1,c,visited,heights[r][c]);
            dfs(r - 1,c,visited,heights[r][c]);
            dfs(r,c + 1,visited,heights[r][c]);
            dfs(r,c - 1,visited,heights[r][c]);
        }

        //start dfs from the side borders
        for(let r = 0;r < rows;r++){
            dfs(r,0,pacificVisited,heights[r][0])
            dfs(r,cols - 1,atlanticVisited,heights[r][cols - 1])
        }

        //start dfs from the vertical borders
        for(let c = 0;c < cols;c++){
            dfs(0,c,pacificVisited,heights[0][c]);
            dfs(rows - 1,c,atlanticVisited,heights[rows - 1][c])
        }

        //now count the ones that are in both arrs
        for(let r = 0;r < rows;r++){
            for(let c = 0;c < cols;c++){
                let key = `${r},${c}`

                if(pacificVisited.has(key) && atlanticVisited.has(key)){
                    result.push([r,c]);
                }
            }
        }
        return result
    }
}
