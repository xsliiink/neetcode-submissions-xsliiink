class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let first = 0;
        let second = 0;


        for(let i = 0;i < nums.length;i++){
            let current = Math.max(first + nums[i],second);

            first = second;
            second = current;
        }
        return second;
    }
}
