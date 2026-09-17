class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        let n = nums.length;
        let output = new Array(n);


        //1.Accumulate the products from the left
        output[0] = 1;
        for(let i = 1;i < n;i++){
            //multiplying the previous products on the left(output[i - 1]) by the num   berfore current(nums[i - 1])
            output[i] = output[i - 1] * nums[i - 1];
        }

        //2.Accumulate the products from the right
            //putting into the right product everythin thats to the right of nums[i]
        let rightProduct = 1;
        for(let i = n - 1;i >= 0;i--){
            output[i] = output[i] * rightProduct;
            rightProduct *= nums[i];
        }

        return output;
    }
}
