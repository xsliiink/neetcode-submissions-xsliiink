class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        //first we create a hashset to store all the elements
        const set = new Set(nums);

        let longest = 0;
        //now we loop through the set and look for the smallest n
        for(let n of set){
            if(!set.has(n - 1)){
                //found the head
                let currentNum = n;
                let currentStreak = 1;

                while(set.has(currentNum + 1)){
                    currentNum++;
                    currentStreak++;
                }
                longest = Math.max(longest,currentStreak);
            }
            
        }
        return longest;
    }
}
