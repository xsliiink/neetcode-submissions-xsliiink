class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        //we need to create an indexed arr 
        let dp = new Array(s.length + 1).fill(0);

        //base case - theres always one way
        dp[0] = 1

        //now we need to loop through the word
        for(let i = 1;i <= s.length;i++){
            //first check
            if(s[i - 1] !== "0"){
                dp[i] += dp[i - 1] 
            }

            //second check - now we can use the previous value
            if(i >= 2){

                //cutting two digits out of a string
                let twoDigit = parseInt(s.substring(i - 2,i));

                //checking if this digit lies in the range
                if(twoDigit <= 26 && twoDigit >= 10){
                    dp[i] += dp[i -2];
                }
            }
        }

        return dp[s.length]
    }
}
