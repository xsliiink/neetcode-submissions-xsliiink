class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let res = ""

        //cycle
        for(let i = 0; i < s.length;i++){

            let odd = this.helper(i,i,s);

            let even = this.helper(i,i + 1,s)

            let currentLongest = odd.length > even.length ?  odd: even

            if(currentLongest.length > res.length){
                res = currentLongest;
            }
        }
        return res
    }

    helper(L,R,s){
        let res = "";

        while(L >= 0 && R < s.length && s[L] == s[R]){
            L--;
            R++;
        }

        return s.substring(L + 1,R);
    }
}
