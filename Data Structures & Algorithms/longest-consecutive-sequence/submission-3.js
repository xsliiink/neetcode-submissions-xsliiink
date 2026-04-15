class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        let set = new Set(nums);
        let maxCount = 0;

        for(let n of set){
            if(!set.has(n - 1)){
                let smallest = n;
                let longestStreak = 1;

                while(set.has(smallest + 1)){
                    longestStreak++;
                    smallest++;
                }
                maxCount = Math.max(longestStreak,maxCount)
            }
        }
        return maxCount;
    }
    
}
