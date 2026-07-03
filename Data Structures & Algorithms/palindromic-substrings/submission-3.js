class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {

        if(s.length === 1) return 1;

        let maxCount = 0;

        for(let i = 0;i < s.length;i++){
            
            maxCount += this.helper(i,i,s);
            maxCount += this.helper(i,i + 1,s);
        }

        return maxCount;
    }

    helper(L,R,s){
        let count = 0;

        while(s[L] == s[R] && L>= 0 && R <= s.length){
            L--;
            R++;
            count++
        }

        return count
    }
}
