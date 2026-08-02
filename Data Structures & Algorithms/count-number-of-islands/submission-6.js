class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let count = 0;
        let rows = grid.length;
        let cols = grid[0].length;

        const dfs = (r,c) => {

            if(r >= rows || c >= cols || c < 0 || r < 0 || grid[r][c] !== "1") return;

            //ark the current node
            grid[r][c] = "0";

            //dfs iunto four sides
            dfs(r - 1,c);
            dfs(r + 1,c);
            dfs(r,c + 1);
            dfs(r,c - 1);
        }

        for(let r = 0;r < rows;r++){
            for(let c = 0;c < cols;c++){
                if (grid[r][c] == "1"){
                    count++;
                    dfs(r,c);
                }
            }
        }

        return count;
    }
}
