class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {

        //putting 0 for the first 0 element
        let res = [0];
        
        for(let i = 1;i <= n;i++){
            res[i] = res[i & (i - 1)] + 1;
        }

        return res;
    }
}
