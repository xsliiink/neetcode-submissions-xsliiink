class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        
        //reverse the diagonal
        for(let i = 0;i < matrix.length;i++){
            for(let j = i; j < matrix[0].length;j++){
                let temp = matrix[i][j];
                matrix[i][j] = matrix[j][i]
                matrix[j][i] = temp;
            }
        }

        //reverse the rows of the matrix
        for(let i = 0;i < matrix.length;i++){
            matrix[i].reverse()
        }

        return matrix
    }
}
