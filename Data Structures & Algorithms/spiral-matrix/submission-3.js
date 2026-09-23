class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        let top = 0;
        let bottom = matrix.length - 1;
        let left = 0;
        let right = matrix[0].length - 1;
        let result = []

        while(top <= bottom && left <= right){
            //4 cycles to go along 4 walls
            for(let col = left;col <= right;col++){
                result.push(matrix[top][col]);
            }
            top++;

            for(let row = top;row <= bottom;row++){
                result.push(matrix[row][right]);
            }
            right--;

            if(top <= bottom){
                //go along the bottom
                for(let col = right;col >= left;col--){
                    result.push(matrix[bottom][col])
                }
                bottom--;
            }
            
            if(left <= right){
                //go along the left wall
                for(let row = bottom;row >= top;row--){
                    result.push(matrix[row][left]);
                }
                left++
            }
            
        }

        return result;
    }
}
