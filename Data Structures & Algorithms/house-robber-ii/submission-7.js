class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {

        if(nums.length === 1) return nums[0]
        
        const houseRobber = (nums) => {

            let dp = new Array(nums.length).fill(1)

            if(nums.length === 1) return nums[0]

            dp[0] = nums[0]
            dp[1] = Math.max(nums[0],nums[1])

            for(let i = 2;i < nums.length;i++){
            dp[i] = Math.max(dp[i - 2] + nums[i],dp[i - 1])
            }

            return dp[nums.length - 1]
        }

        return Math.max(houseRobber(nums.slice(1)),houseRobber(nums.slice(0,nums.length - 1)))
    }
}
