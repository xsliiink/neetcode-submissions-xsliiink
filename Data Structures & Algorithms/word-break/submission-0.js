class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        //create an arr
        const dp = new Array(s.length + 1).fill(false);
        dp[s.length] = true

        //loop trough the str
        for(let i = s.length;i >= 0;i--){
            
            for(let word of wordDict){
                if (s.startsWith(word,i)){
                    if(i + word.length <= s.length && dp[i + word.length]){
                        dp[i] = true;
                        break;
                    }
                };
            }
        }

        return dp[0]
    }
}
