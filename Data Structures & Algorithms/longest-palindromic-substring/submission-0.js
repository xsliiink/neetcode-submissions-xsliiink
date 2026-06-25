class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {

        let res = "";

        for(let i = 0;i < s.length;i++){
            //odd palindrome
            let oddPalindrome = this.expand(i,i,s);

            //even palindrome
            let evenPalindrome = this.expand(i,i + 1,s);

            if(oddPalindrome.length > res.length){
                res = oddPalindrome;
            }
            if(evenPalindrome.length > res.length){
                res = evenPalindrome;
            }
        }
        return res
    }
    expand(L,R,s){
        //case 1
        while(L >= 0 && R < s.length && s[L] == s[R]){
            L--;
            R++
        }

        return s.substring(L + 1,R);
    }
}
