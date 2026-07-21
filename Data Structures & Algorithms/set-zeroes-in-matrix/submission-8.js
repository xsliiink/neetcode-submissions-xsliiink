class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {

        //we need to variables for the edges
        let colZero = false;
        let rowZero = false;

        //loop through the edges
        for(let i = 0;i < matrix.length;i++){
            if(matrix[i][0] == 0) colZero = true;
        }

        for(let j = 0;j < matrix[0].length;j++){
            if(matrix[0][j] == 0) rowZero = true;
        }


        //loop through the middle of the matrix
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
                if(matrix[i][0] == 0 || matrix[0][j] == 0){
                    matrix[i][j] = 0;
                }
            }
        }

        //filling the edges
        if(colZero){
            for(let i = 0;i < matrix.length;i++){
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
