class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let one = 0;
        let two = 0;

        for(let num of nums){
            let curr = Math.max(one + num,two);

            one = two;
            two = curr;
        }

        return two;
    }
}
