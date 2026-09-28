class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProductDifference(nums) {
        if(nums.length < 4) return 0;
        
        //sort the array fiest
        nums = nums.sort((a,b) => a -b);

        //multioply the nums out and substract them
        let product = (nums[nums.length - 1]*nums[nums.length - 2])-(nums[0] *nums[1]);

        return product;
    }
}
