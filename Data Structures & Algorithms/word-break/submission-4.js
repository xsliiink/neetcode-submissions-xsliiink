class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        //what we store in the dp? - true / false for every index
        let dp = new Array(s.length + 1).fill(false);

        dp[0] = true;

        for(let i = 1;i <= s.length;i++){
            //now go through the words dict
            for(let word of wordDict){
                if(s.substring(i - word.length,i) === word && dp[i - word.length] === true){
                    dp[i] = true; 
                }
            }
        }

        return dp[s.length]
    }
}
