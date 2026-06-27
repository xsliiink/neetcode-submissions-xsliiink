class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        //if theres only 1 hosue
        if(nums.length === 1) return nums[0];

        let robWithoutFirst = this.helper(nums.slice(1));

        let robWithoutLast = this.helper(nums.slice(0,nums.length - 1))

        return Math.max(robWithoutFirst,robWithoutLast);
    }

    helper(nums){
        let one = 0;
        let two = 0;

        for(let num of nums){
            let current = Math.max(num + one,two)

            one = two;
            two = current; 
        }
        return two
    }
}
