class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        //sort the arr first
        nums.sort((a,b) => a - b);
        let result = []

        for(let i = 0;i < nums.length - 2;i++){
            let num = nums[i];

            let left = i + 1;
            let right = nums.length - 1;

            //skipping the same elements
            if(i > 0 && nums[i] === nums[i - 1]) continue

            while(left < right){
                let sum = nums[left] + nums[right] + num;

                if(sum === 0){
                    result.push([num,nums[left],nums[right]]);
                    left++;
                    right--;

                    //skipping the duplicates from both left and right
                    while(left < right && nums[left] == nums[left - 1]) left++;
                    while(left < right && nums[right] == nums[right + 1]) right--;
                }              
                if(sum > 0){
                    right--;
                }else if(sum < 0){
                    left++
                }
            }
        }
        return result;
    }
}
