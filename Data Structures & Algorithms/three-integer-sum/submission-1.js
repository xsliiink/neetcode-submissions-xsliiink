class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        //first we need to sort the nums array
        nums.sort((a, b) => a - b);

        //reate an array for storing the result arrays
        const result = [];

        for(let i = 0; i < nums.length; i++){
            let left =  i + 1;
            let right = nums.length - 1;
            
            //eliminating duplicates which are standing next to each other
            if(i > 0 && nums[i] == nums[i - 1]) continue;

            while(left < right){
                if(nums[left] + nums[right] == (0 - nums[i])){
                    result.push([nums[left],nums[right],nums[i]]);
                    //if the sum is right move both left and right
                    left++;
                    right--;

                    // ВОТ ОНО: пропускаем дубликаты для левого указателя
                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }
                }
                else if((nums[left] + nums[right] < (0 - nums[i]))){
                    left++;
                }
                else if((nums[left] + nums[right] > (0 - nums[i]))){
                    right--;
                }
            }
        }
        return result;
    }
}
