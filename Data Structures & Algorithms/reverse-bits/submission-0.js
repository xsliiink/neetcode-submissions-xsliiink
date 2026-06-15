class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {

        let result = 0;

        for(let i = 0;i < 32;i++){
            //move result to the left
            result = result<<1

            //take the rightmost bit from n
            let rightmost = n & 1;

            result+= rightmost;
            
            //mvoe to the next bit
            n = n>>1;
        }

        return result>>>0;
    }
}
