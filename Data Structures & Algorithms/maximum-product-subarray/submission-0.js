class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let currentMax = nums[0];
        let currentMin = nums[0];
        let globalMax = nums[0]

        for(let i = 1;i < nums.length;i++){
            let tempMax = currentMax;
            let n = nums[i];

            currentMax = Math.max(n,n*currentMax,n * currentMin);

            currentMin = Math.min(n,n*tempMax,n * currentMin);

            globalMax = Math.max(globalMax,currentMax);
        }

        return globalMax;
    }
}
