class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {

        //looping through first row & column
        let rowZero = false;
        let colZero = false;

        for(let i = 0;i < matrix.length;i++){
            if(matrix[i][0] == 0) colZero = true
        }

        for(let j = 0;j < matrix[0].length;j++){
            if(matrix[0][j] == 0) rowZero = true
        }
        
        //Step 2 - Looking for zeroes in the middle
        for(let i = 1;i < matrix.length;i++){
            for(let j = 1;j < matrix[0].length;j++){
                if(matrix[i][j] == 0){
                    matrix[0][j] = 0
                    matrix[i][0] = 0
                }
            }
        }

        //Step 3 - A
        for(let i = 1;i < matrix.length;i++){
            for(let j = 1;j < matrix[0].length;j++){
                if(matrix[i][0] == 0 || matrix[0][j] == 0){
                    matrix[i][j] = 0 
                }
            }
        }

        //Step 3 - B
        if(rowZero){
            for(let i = 0;i < matrix[0].length;i++){
                matrix[0][i] = 0
            }
        }

        if(colZero){
            for(let j = 0;j < matrix.length;j++){
                matrix[j][0] = 0
            }
        }

        return matrix
    }
}
