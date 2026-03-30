class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //if nums is empty return 0;
        if(nums.length == 0) return 0;

        //we need to create a hasMap to store all the occurances of nums
        const seen = new Map();

        //we need to loop through the nums set 
        for(let i = 0; i < nums.length;i++){
            //complement = target - nums[i];
            let complement = target - nums[i];

            if (seen.has(complement)){
                return [seen.get(complement), i];
            }else{
                seen.set(nums[i],i);
            }
        }
            

        

        

        //if hashMap contains complement we found it! return the index of complement and i

        //else add i.nums[i] to  the hashmap
    }
}
