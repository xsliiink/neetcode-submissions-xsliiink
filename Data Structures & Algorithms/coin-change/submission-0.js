class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let dp = new Array(amount + 1).fill(amount + 1);

        //base case
        dp[0] = 0

        //first we fo throught the boxes
        for(let i = 1;i < dp.length;i++){
            //now we play with the coins
            for(let coin of coins){
                if(i - coin >= 0){
                    dp[i] = Math.min(dp[i],dp[i - coin] + 1)
                }
            }
        }

        return dp[amount] > amount ? -1 : dp[amount]
    }
}
