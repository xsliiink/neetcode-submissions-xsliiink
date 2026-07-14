class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        
        let set = new Set(nums);
        let longestStreak = 0;

        for(let n of nums){
            if(!set.has(n - 1)){
                let smallest = n;
                let currentStreak = 1;

                while(set.has(smallest + 1)){
                    currentStreak++;
                    smallest++;
                }

                longestStreak = Math.max(currentStreak,longestStreak)
            }
        }

        return longestStreak;
    }
}
