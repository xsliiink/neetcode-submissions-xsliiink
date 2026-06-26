class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let total = 0;
        
        for(let i = 0;i < s.length;i++){
            total += this.expand(i,i,s);
            
            total += this.expand(i,i + 1,s)
        }

        return total;
    }

    expand(L,R,s){
        let count = 0;

        while(s[L] == s[R] && L>=0 && R < s.length){
            count++;
            L--;
            R++
        }

        return count;
    }
}
