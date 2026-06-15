class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {

        let count = 0;
        
        for(let i = 0;i < 32;i++){
            count+= n & 1;
            n = n >> 1;
        }

        return count;
    }
}
