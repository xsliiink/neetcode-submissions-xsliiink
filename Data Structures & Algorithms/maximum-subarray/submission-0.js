class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSub = nums[0];
        let currSum = 0;

        for(let n of nums){
            if(currSum < 0){
                currSum = 0;
            }
            currSum += n;
            maxSub = Math.max(maxSub,currSum)
        }
        return maxSub
    }
}
