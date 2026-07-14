class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let maxCount = 0;

        for(let i = 0;i < s.length;i++){
            maxCount += this.helper(i,i + 1,s);
            maxCount += this.helper(i,i,s);   
        }

        return maxCount;
    }

    helper(L,R,s){
        let currCount = 0;

        while(L >= 0 && R < s.length && s[L] == s[R]){
            currCount++;
            L--;
            R++;
        }

        return currCount;
    }
}
