class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        //first we need to create prefix
        let prefix = 1;
        let res = [];

        for(let i = 0;i < nums.length;i++){
            res[i] = prefix;
            prefix = prefix * nums[i];
        }

        //we need to create a postfix to count the nums on the right of i
        let postfix = 1;
        for(let i = nums.length - 1; i >= 0;i--){
            //firstly we write the value in and only then we add it to postsix
            res[i] = res[i] * postfix;
            postfix = nums[i] * postfix;
        }

    return res;

    }
}
