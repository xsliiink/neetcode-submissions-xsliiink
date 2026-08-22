class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        if (!s || s[0] === '0') return 0;
        //what are we going to store in dp? - number of decode ways for s[i]
        let dp = new Array(s.length + 1).fill(0)
        dp[0] = 1;
        dp[1] = 1;

        for(let i = 2;i <= s.length;i++){
            //for 1 digit
            if(s[i - 1] !== "0"){
                dp[i] += dp[i - 1];
            }
            
            if(Number(s.slice(i - 2,i)) > 9 && Number(s.slice(i - 2,i)) < 27){
                dp[i] += dp[i -2]
            }
        }

        return dp[s.length]
    }
}
