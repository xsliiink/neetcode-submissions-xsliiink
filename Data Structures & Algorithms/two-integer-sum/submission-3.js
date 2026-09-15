class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        
        //num -> index
        let map = new Map();

        for(let i = 0;i< nums.length;i++){
            let complement = target - nums[i];

            if(map.has(complement)){
                return [map.get(complement),i]
            }

            //add the current num;
            map.set(nums[i],i)
        }

        return []
    }
}
