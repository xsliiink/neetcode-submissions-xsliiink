class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    hasDuplicate(nums){
        //creating an empty HashSet
        const seen = new Set();

        for(const num of nums){
            if (seen.has(num)){
                return true;
            }

            seen.add(num);
        }
        return false
    }
}
