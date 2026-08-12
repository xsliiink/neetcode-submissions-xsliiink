class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {

            let maxCount = 0;

            const helper = (s,L,R) => {

                while(L >=  0 && R < s.length && s[L] == s[R]){
                    L--;
                    R++;
                     maxCount++;
                }
            }

            //expand around the centre
            for(let i = 0;i < s.length;i++){
                helper(s,i,i + 1);
                helper(s,i,i);
            }

            return maxCount;
    }
}
