class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        let dp = new Array(s.length + 1).fill(0);
        dp[0] = 1

        for(let i = 1;i <= s.length;i++){
            if(s[i - 1] !== "0"){
                dp[i] += dp[i - 1]
            }

            if(i >= 2){
                let twoDigit = parseInt(s.substring(i -2,i));
                if(twoDigit >= 10 && twoDigit <= 26){
                    dp[i] += dp[i - 2]
                }

            }
        }

        return dp[s.length]
    }
}
