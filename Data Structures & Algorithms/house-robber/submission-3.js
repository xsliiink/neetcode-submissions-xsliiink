class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let one = 0;
        let two = 0;

        for(let i = 0;i < nums.length;i++){
            let currMax = Math.max(nums[i] + two,one);

            two = one
            one = currMax;
        }

        return one
    }
}
