class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let one = 1;
        let two = 2;

        if(n <= 2) return n;

        for(let i = 3;i <= n;i++){
            let current = one + two;
            one = two;
            two = current
        }

        return two;
    }
}
