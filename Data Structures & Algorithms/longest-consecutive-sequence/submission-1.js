class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);

        let longest = 0;

        for(let n of set){

            if(!set.has(n - 1)){
                let currentNum = n;
                let longestStreak = 1;

                while(set.has(currentNum + 1)){
                currentNum++;
                longestStreak++;
                }

                longest = Math.max(longestStreak,longest)
            }
        }

        return longest;
    }
}
