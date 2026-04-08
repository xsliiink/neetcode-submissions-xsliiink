class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const map = new Set(nums);

        let maxCount = 0;

        for(let n of map){

            if(!map.has(n - 1)){
                let smallestNum = n;
                let longestStreak = 1;

                while(map.has(smallestNum + 1)){
                    smallestNum++;
                    longestStreak++;
                }
                 maxCount =  Math.max(longestStreak,maxCount);
            }
        }
        return maxCount;
    }
}
