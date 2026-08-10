class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {

        //helper funciton
        const helper = (s,L,R) => {

            while(L >= 0 && R < s.length && s[L] == s[R]){
                L--;
                R++;
            }

            return s.substring(L + 1,R)
        }

        let res = ""

        for(let i = 0;i < s.length;i++){
            let odd = helper(s,i,i);
            let even = helper(s,i,i + 1);

            let maxPal = odd.length > even.length ? odd : even;
            if(maxPal.length > res.length){
                res = maxPal
            }
        }

        return res
    }
}
