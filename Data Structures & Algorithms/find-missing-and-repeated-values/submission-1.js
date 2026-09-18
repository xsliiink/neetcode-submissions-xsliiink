class Solution {
    /**
     * @param {number[][]} grid
     * @return {number[]}
     */
    findMissingAndRepeatedValues(grid) {
        //use a set to store the occurances
        let seen = new Set();
        let repeated = -1;
        let sum = 0;
        let n = grid.length;
        let totalElements = n * n;

        for(let r = 0;r < grid.length;r++){
            for(let c = 0;c < grid[0].length;c++){

               if(seen.has(grid[r][c])){
                //found the double value
                repeated = grid[r][c]
                
               }

            //add the val
            seen.add(grid[r][c]);
            sum+= grid[r][c];
            }
        }

        //find the missing val
        let expectedSum = (totalElements * (totalElements +1))/2;
        let missing  = expectedSum - (sum - repeated);

        return [repeated,missing]
    }
}
