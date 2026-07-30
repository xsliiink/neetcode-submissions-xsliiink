class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        //create a dp arr
        let dp = new Array(nums.length).fill(1);

        //loop
        for(let i = 0;i < nums.length;i++){
            let curr = nums[i];

            //inner loop - looking at all the previous elements
            for(let j = 0;j < i;j++){
                if(nums[i] > nums[j]){
                    //we can continue the chain
                    dp[i] = Math.max(dp[i],dp[j] + 1)
                }
            }
        }

        return Math.max(...dp)
    }
}
