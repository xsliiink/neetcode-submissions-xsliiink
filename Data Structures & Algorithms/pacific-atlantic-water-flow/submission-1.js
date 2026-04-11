class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
         
         //determing the length
         let rows = heights.length;
         let cols = heights[0].length;

         let result = [];

         //creating two hashmaps for two oceans
         const atlanticSet = new Set();
         const pacificSet = new Set();

         //create a dfs function
         function dfs(r,c,prevHeight,hashset){

            let key = `${r},${c}`

            if( r < 0 || c < 0 || r >= rows || c >= cols || heights[r][c] < prevHeight || hashset.has(key)){
                return
            }

            hashset.add(key);

            //recursively checking all the neighbor cells
            dfs(r + 1,c,heights[r][c],hashset)
            dfs(r - 1,c,heights[r][c],hashset)
            dfs(r,c + 1,heights[r][c],hashset)
            dfs(r,c - 1,heights[r][c],hashset)
         }

         //calling dfs on the vertical borders
         for(let row = 0;row < heights.length;row++){
            dfs(row,0,heights[row][0],pacificSet);
            dfs(row,cols - 1,heights[row][cols - 1],atlanticSet)
         }

         //calling dfs on all parallel corder cells
         for(let col = 0;col < cols;col++){
            dfs(0,col,heights[0][col],pacificSet);
            dfs(rows - 1,col,heights[rows - 1][col],atlanticSet);
         }

         //checking what cells were painted
         for(let r = 0;r < rows;r++){
            for(let c = 0;c < cols;c++){
                let key = `${r},${c}`
                if(atlanticSet.has(key) && pacificSet.has(key)){
                    result.push([r,c]);
                }
            }
         }

         return result
    }
}
