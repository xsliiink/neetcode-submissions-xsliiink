class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {

        let colZero = false;
        let rowZero = false;

        for(let i = 0;i < matrix.length;i++){
            if(matrix[i][0] == 0) colZero = true;
        }

        for(let i = 0;i < matrix[0].length;i++){
            if(matrix[0][i] == 0) rowZero = true;
        }

        //now looping through the middle od the matrix
        for(let i = 1;i < matrix.length;i++){
            for(let j = 1;j < matrix[0].length;j++){
                if(matrix[i][j] == 0){
                    matrix[0][j] = 0;
                    matrix[i][0] = 0;
                }
            }
        }

        //filling the matrix with zeroes
        for(let i = 1;i < matrix.length;i++){
            for(let j = 1;j < matrix[0].length;j++){
                if(matrix[0][j] === 0 || matrix[i][0] === 0){
                    matrix[i][j] = 0
                }
            }
        }


        //filling the edges woth zeroes
        if(colZero){
            for(let i =0;i < matrix.length;i++){
                matrix[i][0] = 0;
            }
        }

        if(rowZero){
            for(let j = 0;j < matrix[0].length;j++){
                matrix[0][j] = 0;
            }
        }

        return matrix;
    }
}
