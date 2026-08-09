class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        //what is stored in dp[i]? - it contains true/false
        let dp = new Array(s.length + 1).fill(false);
        dp[0] = true;

        //how do we get to true?
            //-loop through string
            //-loop through words
            //-if dp[i - word] == true dp[i] = true
        for(let i = 0;i <= s.length;i++){
            for(let word of wordDict){
                //we have the word before it
                //the curr s.slice amatches with the curr word
                if(dp[i - word.length] == true && s.slice(i - word.length,i) === word) dp[i] = true
            }
        }

        return dp[s.length]    

    }
}
