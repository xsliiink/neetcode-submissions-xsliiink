class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {

        if(nums.length === 1) return nums[0]

        let last = this.houseRobber(nums.slice(0,nums.length - 1));

        let first = this.houseRobber(nums.slice(1));

        return Math.max(last,first);
    }

    houseRobber(nums){

        let one = 0;
        let two = 0;

        for(let i = 0;i < nums.length;i++){
            let curr = Math.max(nums[i] + one,two);

            one = two;
            two = curr;

        }
        return two
    }
}
