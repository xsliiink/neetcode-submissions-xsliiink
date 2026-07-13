class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        
        let top = 0;
        let right = matrix[0].length - 1;
        let bottom = matrix.length - 1;
        let left = 0;
        let res = []

        while(top <= bottom && left <= right){

            //going left to right
            for(let i = left;i <= right;i++){
                res.push(matrix[top][i]);
            }
            top++;

            //going down
            for(let i = top;i <= bottom;i++){
                res.push(matrix[i][right])
            } 
            right--


            //going left
            if(top <= bottom){
                for(let i = right;i >= left;i--){
                    res.push(matrix[bottom][i])
                }
            }
            bottom--;

            //going up
            if(left <= right){
                for(let i = bottom;i >= top;i--){
                    res.push(matrix[i][left])
                }
            left++
            }
        }
        return res
    }
}
