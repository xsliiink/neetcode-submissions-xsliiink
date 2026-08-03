class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        if(!nums.length) return 0;

       //create a dp arr
       let dp = new Array(nums.length).fill(1)


        for(let i = 0;i < nums.length;i++){
           //inner cycle
           for(let j = 0;j < i;j++){
            if(nums[j] < nums[i]){
                dp[i] = Math.max(dp[i],dp[j] + 1)
            }
           }
        }

        return Math.max(...dp)
    }
}
