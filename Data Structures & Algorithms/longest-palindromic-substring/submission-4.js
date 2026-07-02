class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {

        let maxAllTime = "";

        //loop through the string
        for(let i =0;i < s.length;i++){
            let even = this.helper(i,i,s);

            let odd = this.helper(i,i + 1,s);

            let max = even.length > odd.length ? even : odd;

           if(max.length > maxAllTime.length){
            maxAllTime = max;
           }
        }

        return maxAllTime
    }

    helper(L,R,s){


        while(L>= 0 && R < s.length && s[L] == s[R]){
            L--;
            R++;
        }

        return s.substring(L + 1,R);
    }
}
