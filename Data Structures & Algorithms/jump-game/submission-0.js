class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let maxReach = 0;

        //loop through the nums
        for(let i = 0;i < nums.length;i++){
            if(maxReach < i){
                return false;
            }

            else if(maxReach >= nums.length - 1){
                return true;
            }
            maxReach = Math.max(maxReach,i + nums[i]);
        }
    }
}
