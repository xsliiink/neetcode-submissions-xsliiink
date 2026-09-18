class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let left = 0;
        let maxProfit = 0;

        for(let right = 1;right < prices.length;right++){  
            if(prices[right] > prices[left]){
                let profit = prices[right] - prices[left];
                maxProfit = Math.max(maxProfit,profit)
            }else{
                left = right
            }           
        }

        return maxProfit;
    }
}
