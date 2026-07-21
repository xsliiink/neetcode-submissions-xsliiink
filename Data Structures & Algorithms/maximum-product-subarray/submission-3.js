class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let maxProduct = nums[0];
        let minProduct = nums[0];
        let greatProduct = nums[0]

       for(let i = 1;i < nums.length;i++){
        
        let n = nums[i];
        let tempMax = maxProduct;

        maxProduct = Math.max(n,maxProduct *n,minProduct * n);

        minProduct = Math.min(n,tempMax * n,minProduct * n);

        greatProduct = Math.max(greatProduct,maxProduct);
       }

       return greatProduct;
    }
}
