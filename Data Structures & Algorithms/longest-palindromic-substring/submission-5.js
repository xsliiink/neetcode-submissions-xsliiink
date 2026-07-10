class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {

        //base case
        if(s.length === 1) return s[0]

        let word = ""

        //go through a string and call a heloper function
        for(let i = 0;i < s.length;i++){
            let even = this.helper(s,i,i + 1);

            let odd = this.helper(s,i,i);


            let currMax = odd.length > even.length ? odd : even;

            if(currMax.length > word.length){
                word = currMax;
            }
        }
        return word
    }

    helper(s,L,R){

        while(L >= 0 && R < s.length && s[L] == s[R]){
            L--;
            R++
        }

        return s.substring(L + 1,R)
    }
}
