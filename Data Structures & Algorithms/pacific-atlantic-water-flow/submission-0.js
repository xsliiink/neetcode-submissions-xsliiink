class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const rows = heights.length;
        const cols = heights[0].length;

        const pacificVisited = new Set();
        const atlanticVisited = new Set();

        function dfs(r,c,visited,prevHeight){
            //current position on the grid for the hash set
            const key = `${r},${c}`;

            //base cases
            if(r < 0  || c <0 || c >= cols || r >= rows || visited.has(key) || heights[r][c] < prevHeight) return ;
            
            //adding the cell to the set
            visited.add(key);

            //recursively chekcking all the neighbor cells
            dfs(r + 1,c,visited,heights[r][c])
            dfs(r - 1,c,visited,heights[r][c])
            dfs(r,c + 1,visited,heights[r][c])
            dfs(r,c - 1,visited,heights[r][c])
        }

        //calling dfs for all the horizontal cells
        for(let c= 0;c < cols;c++){
            dfs(0, c,pacificVisited,heights[0][c]);
            dfs(rows - 1,c,atlanticVisited,heights[rows - 1][c])
            
        }

        //calling dfs for all the verical cells
         for(let r= 0;r < rows;r++){
            dfs(r, 0,pacificVisited,heights[r][0]);
            dfs(r,cols - 1,atlanticVisited,heights[r][cols -1])
        }

        //now check the cells that are painted with both collors
        const res = [];
        for(let r = 0;r < heights.length;r++){
            for(let c = 0;c < heights[0].length;c++){
                const key = `${r},${c}`
                if(atlanticVisited.has(key) && pacificVisited.has(key)){
                    res.push([r,c]);
                }
            }
        }
        return res;
    }
}
