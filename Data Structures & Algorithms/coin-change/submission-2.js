class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {

        //here we store the number of ways to get to the num
        let dp = new Array(amount + 1).fill(amount + 1);

        dp[0] = 0;


        //loop through the amount
        for(let i = 0;i <= amount;i++){
            for(let coin of coins){
                //basic check
                if(i - coin >= 0){
                    dp[i] = Math.min(dp[i], dp[i - coin] +1)
                }
            }
        }

        return dp[amount] >amount ? -1 : dp[amount]
    }
}
