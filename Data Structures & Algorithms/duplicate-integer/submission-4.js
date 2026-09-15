class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
         let duplicates = new Map();

         for(let num of nums){
            duplicates.set(num,(duplicates.get(num) || 0) + 1)
            if(duplicates.has(num) && duplicates.get(num) > 1){
                return true;
            }
         }

         return false;
    }
}
