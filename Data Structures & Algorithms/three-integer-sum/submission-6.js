class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        //sort the arr first
        nums.sort((a,b) => a - b);

        let res = [];

       for(let i = 0;i < nums.length;i++){

            let left = i + 1;
            let right = nums.length - 1;

            if(i > 0 && nums[i] == nums[i - 1]) continue;


            while(left < right){
                let complement = nums[left] + nums[right]
                //
                if( complement == ( 0 - nums[i])){
                    res.push([nums[left],nums[right],nums[i]]);

                    left++;
                    right--;

                    //eliminating the suplicates
                    while(left < right && nums[left] == nums[left -1]){
                        left++;
                    }
                }else if(complement > (0 - nums[i])){
                    right--;
                }else if(complement < (0 - nums[i])){
                    left++;
                }
            }
       }
       return res;
    }
}
