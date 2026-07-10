class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        //base case
        if(nums.length === 1) return nums[0]


        let last = this.helper(nums.slice(0,nums.length - 1))

        let first = this.helper(nums.slice(1));

        return Math.max(last,first)
    }

    helper(nums){
        let one = 0;
        let two = 0;


        for(let num of nums){
            let currentMax = Math.max(one + num,two);

            one = two
            two = currentMax;
        }
    return two;
    }
}
