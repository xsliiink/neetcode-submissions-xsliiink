class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        //first we need to sort all the nums array
        nums.sort((a,b) => a - b);

        let res = [];

        for(let i = 0;i < nums.length;i++){
            let left = i + 1;
            let right = nums.length - 1;

            if(i > 0 && nums[i] == nums[i - 1]) continue;

            //eliminating the duplicates

            while(left < right){
                if(nums[left] + nums[right] == (0 -nums[i])){
                    res.push([nums[left],nums[right], nums[i]]);

                    left++;
                    right--;

                    //eliminating the duplicates
                    while(left < right && nums[left] == nums[left - 1]){
                        left++;
                    }
                }

                else if(nums[left] + nums[right] < (0 - nums[i])){
                    left++;
                } 
                else if(nums[left] + nums[right] >  (0 - nums[i])){
                    right--;
                }
            }
        }
        return res;
    }
}
