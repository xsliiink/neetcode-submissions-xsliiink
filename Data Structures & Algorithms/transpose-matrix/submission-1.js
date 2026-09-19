class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[][]}
     */
    transpose(matrix) {

        let rows = matrix.length;
        let cols = matrix[0].length;

        //creating a cols by rows arr
        let result = Array.from({length: cols}, () => new Array(rows));

        for(let r = 0;r < rows;r++){
            for(let c = 0;c < cols;c++){
                result[c][r] = matrix[r][c];
            }
        }

        return result;
    }
}
