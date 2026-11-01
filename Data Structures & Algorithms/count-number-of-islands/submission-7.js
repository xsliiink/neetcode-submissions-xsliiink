class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {

        const dfs = (r,c,grid) => {
            let rows = grid.length;
            let cols = grid[0].length;


            //basic check
            if(r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] == '0') return;

            //marking the current one as 0;
            grid[r][c] = '0';

            //do the dfs in four directions
            dfs(r + 1,c,grid);
            dfs(r - 1,c,grid);
            dfs(r,c + 1,grid);
            dfs(r,c - 1,grid);
        }

        let count = 0;

        //go through all the cels
        for(let r = 0;r < grid.length;r++){
            for(let c = 0;c <= grid[0].length;c++){
                if(grid[r][c] == '1'){
                    dfs(r,c,grid);
                    count++
                }
            }
        }

        return count;
    }
}
