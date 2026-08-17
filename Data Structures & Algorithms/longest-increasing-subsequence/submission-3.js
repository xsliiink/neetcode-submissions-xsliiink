class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {

        //we going to store the longest sequnce for nums[i]
        let dp = new Array(nums.length).fill(1)


        for(let i = 1;i < nums.length;i++){
            //for every element we run a cycle over the previous elements
            for(let j = 0;j < i;j++){
                if(nums[i] > nums[j]){
                    dp[i] = Math.max(dp[j] + 1,dp[i])
                }
            }
        }

        return Math.max(...dp)
    }
}
