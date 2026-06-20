class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    getSum(a, b) {

        while(b != 0){
            let tempSum = a ^ b;
            let carry = (a & b)<< 1

            a = tempSum;
            b = carry;
        }
        return a;
    }
}
