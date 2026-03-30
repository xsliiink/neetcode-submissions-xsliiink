class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        //if the nums is empty return false;
        if(nums.length == 0) return false;

        //we create a hasmap(object) to store the previous occurances of a num
        const seen = new Map();

        //we loop through the nums arr
        for (let i = 0; i< nums.length;i++){
            if(seen.has(nums[i])){
                return true;
            }else{
                seen.set(nums[i],1);
            }
        }

        return false;
        //if num is in our seen hasmap return true

        //if not add the value to the has map
    }
}
