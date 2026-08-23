class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        //here we going to store the number of coins for each amount
        let dp = new Array(amount + 1).fill(Infinity);
        dp[0] = 0

        for(let i = 0;i <= amount;i++){
            for(let coin of coins){
                //we can only take the coin if the amount(i) is bigger than coin
                if(i >= coin){
                    dp[i] = Math.min(dp[i],dp[i - coin] + 1);
                }
                
            }
        }

        return dp[amount] == Infinity  ? -1 : dp[amount]
    }
}
