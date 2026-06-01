class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        //sort arr first
        nums.sort((a,b) => a - b )

        let res = [];
        for(let i = 0;i <nums.length - 2;i++){

            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let left = i + 1;
            let right = nums.length - 1;

            while(left < right){
                 let sum = nums[right] + nums[left] + nums[i];

                if(sum === 0){
                    res.push([nums[left],nums[right],nums[i]]);

                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;

                    left++;
                    right--;
                }
                else if(sum > 0){
                    right--;
                }else if(sum < 0){
                    left++;
                }
            }
        }
        return res;
    }
}
