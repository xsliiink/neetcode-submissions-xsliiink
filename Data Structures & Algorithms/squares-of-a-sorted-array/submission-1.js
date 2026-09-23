class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        let n = nums.length
        let left = 0;
        let right = n - 1;
        let p = n - 1
        let result = new Array(n);

        while(left <= right){
            let left_square = nums[left] * nums[left];
            let right_square = nums[right] * nums[right];

            if(left_square < right_square){
                result[p] = right_square;
                right--
            }else{
                result[p] = left_square;
                left++
            }
            p--;
        }

        return result;
    }
}
