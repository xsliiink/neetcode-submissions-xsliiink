class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {

        let count = 0;

        //we need to start the cycle
        for(let i = 0;i < s.length;i++){

            //call helper for even median
            count += this.helper(i,i,s)

            //call helper for odd median
            count  += this.helper(i,i + 1,s)

        }

        return count

    }

    helper(L,R,s){

        let count = 0;

        while(L >= 0 && R <= s.length && s[L] == s[R]){
            L--;
            R++;
            count++;
        }

        return count++;
    }
}
