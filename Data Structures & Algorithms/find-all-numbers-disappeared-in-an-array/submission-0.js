class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        
        //marking what we have
        for(let i = 0;i < nums.length;i++){
            let index = Math.abs(nums[i]) - 1;
            if(nums[index] > 0){
                nums[index] = -nums[index]
            }
        }

        //see whats missing
        let result = []
        for(let i = 0;i < nums.length;i++){
            if(nums[i] > 0){
                result.push(i + 1);
            }
        }
    return result;
    }
}
