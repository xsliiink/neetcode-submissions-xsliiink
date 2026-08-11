class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        //create two varibles for storing positive && negative vals
        let posProduct = nums[0];
        let negProduct = nums[0];
        let res = nums[0];

        //loop through all the nums'
        for(let i = 1;i < nums.length;i++){

            //before the val of posProduct change store it somewhere
            let tempProd = posProduct;
            posProduct = Math.max(nums[i],posProduct*nums[i], negProduct * nums[i]);

            negProduct = Math.min(nums[i],negProduct * nums[i],tempProd * nums[i]);

            res = Math.max(posProduct,res)
        }

        return res;
    }
}
