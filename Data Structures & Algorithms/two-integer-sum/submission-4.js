class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();
        let result = [];

        for(let i = 0 ;i < nums.length;i++){
            let complement = target - nums[i];

            if(map.has(complement)){
                result.push(map.get(complement),i)
            }

            map.set(nums[i],i)
        }

        return result
    }
}
