class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        //squre them all and sort
        for(let i = 0;i < nums.length;i++){
            nums[i] = Math.pow(nums[i],2);
        }

        nums.sort((a,b) => a - b);
        
        return nums
    }
}
