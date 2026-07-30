class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {

        let rows = heights.length;
        let cols = heights[0].length;
        let res = [];
        
        let atlanticVisited = Array.from({length: rows},() => new Array(cols).fill(false));
        let pacificVisited = Array.from({length: rows},() => new Array(cols).fill(false));;

        const dfs =  (r,c,prevheight,visited) => {
            //base case
            if(r >= rows || c >= cols || r < 0 || c < 0) return;

            if(visited[r][c]) return;

            if(heights[r][c] < prevheight) return

            //mark the curr cell
            visited[r][c] = true;

            //dfs in four directions
            dfs(r,c + 1,heights[r][c],visited);
            dfs(r,c - 1,heights[r][c],visited);
            dfs(r + 1,c,heights[r][c],visited);
            dfs(r - 1,c,heights[r][c],visited);     
        }

        //start two cycles

        //rows
        for(let r = 0;r < rows;r++){
            dfs(r,0,heights[r][0],pacificVisited);
            dfs(r,cols - 1,heights[r][cols - 1],atlanticVisited)
        }

        //cols
        for(let c = 0;c < cols;c++){
            dfs(0,c,heights[0][c],pacificVisited);
            dfs(rows - 1,c,heights[rows - 1],atlanticVisited);
        }

        //looking in both now
        for(let r = 0;r < rows;r++){
            for(let c = 0; c < cols;c++){
                if(atlanticVisited[r][c] && pacificVisited[r][c]){
                    res.push([r,c]);
                }
            }
        }
        
        return res;
    }
}
