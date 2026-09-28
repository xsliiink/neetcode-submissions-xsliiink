class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {

        let products = new Map();

        for(let i =0;i< nums.length;i++){
            for(let j = 0;j < i;j++){
                if(nums[i] == nums[j]){
                    if(Math.abs(i - j) <= k){
                        return true;
                    }
                }
            }
        }
        return false
    }
}
