class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        

        //first we need to sort all the nums array
        nums.sort((a,b) => a - b);

        //create an array for storing the results array
        const result = [];

        for(let i = 0;i < nums.length;i++){
            let left = i + 1;
            let right = nums.length - 1;

            //eliminating duplicates which are standing next to each other
            if(i > 0 && nums[i] == nums[i - 1]) continue;

            while(left < right){
                //findinng the complement
                if(nums[left] + nums[right] == (0 - nums[i])){
                    result.push([nums[left],nums[right],nums[i]])

                    left++;
                    right--;

                    //elimianting repeating elements in the results arr
                    while(left < right && nums[left] === nums[left - 1]){
                        left++;
                    }
                }else if(nums[left] + nums[right]  < (0 - nums[i])){
                    //moving the left boundary to find the complement for nums[i]
                    left++;
                }else if(nums[left] + nums[right] > (0 - (nums.length - 1))){
                    right--;
                }   
            }
        }
        return result;


    }
}
