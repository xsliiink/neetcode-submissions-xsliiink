class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        //if nums length < 0 return -1;
        if(nums.length == 0) return -1;

        //first we need to create two pointers left and right
        let left = 0;
        let right = nums.length - 1;

        //we need to run a while loop through an array
        while(left <= right){
            //we need a mid element(pivot) to compare the elements
            let mid = Math.floor((right + left)/2);
            
            if (target === nums[mid]) return mid;

            //checking if the left side is right
            if(nums[left] <= nums[mid]){

                //checking if the element is in the left side
                if(target >= nums[left] && target <= nums[mid]){
                    right = mid - 1;
                }else{
                    left = mid + 1
                }
            }
            //if left is not right then the sorted side is right
            else{
                if(target >= nums[mid] && target <= nums[right]){
                    left = mid + 1
                }else{
                    right = mid - 1;
                }
            }
            
        }
        //else the num is not here return - 1 
        return -1;
        
    }
}
