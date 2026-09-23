class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        let seenRows = new Set();
        let seenCols = new Set();

        //spot
        for(let row = 0;row < matrix.length;row++){
            for(let col = 0;col < matrix[0].length;col++){
                if(matrix[row][col] == '0'){
                    seenRows.add(row);
                    seenCols.add(col);
                }
            }
        }

        //replace the rows and cols
        for(let row = 0;row < matrix.length;row++){
            for(let col = 0;col < matrix[0].length;col++){
                if(seenRows.has(row) || seenCols.has(col)){
                    matrix[row][col] = 0;
                }
            }
        }
    }
}
