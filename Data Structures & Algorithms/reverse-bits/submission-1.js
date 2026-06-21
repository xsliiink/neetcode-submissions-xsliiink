class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {

        let result = 0;

        for(let i = 1;i <=32; i++){
            //move result to the left
            result = result<<1;

            //take the rightmost bit
            let rightmost = n & 1;

            //add it to the result
            result+= rightmost;

            //shift the n
            n = n>>1

        }

        return result>>>0;
    }
}
