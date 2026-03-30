class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //we need one has map to keep track of seen elements
        const seen = new Map();

        //also we need a loop to check all the nums in the arr
        for(let i = 0;i < nums.length;i++){
            let num= nums[i];
            let complement = target - num;

            //returing complement index and num index if found
            if(seen.has(complement)){
                return [seen.get(complement),i]
            }

            //adding current index and num to seen 
            seen.set(num, i)
        }

        return []
    }
}
