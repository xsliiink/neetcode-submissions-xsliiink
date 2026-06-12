class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let res = new Array(n + 1).fill(0);

        for(let i =0; i <= n;i++){
            res[i] = (res[i >> 1]) + (i % 2)
        }
        return res;
    }
}
