class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        //this is solved using a prefix sum
        let res = [];

        let prefix = 1;
        //go one way
        for(let i = 0;i < nums.length;i++){
            res[i] = prefix;
            prefix *= nums[i];
        }

        let suffix = 1;
        //go the other way
        for(let i = nums.length - 1;i >= 0;i--){
            res[i] *= suffix;
            suffix *= nums[i];
        }

         return res;
    }
}
