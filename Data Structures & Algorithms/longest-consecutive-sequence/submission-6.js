class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0) return 0;

        let set = new Set(nums);
        let maxLength = 0;

        for(let num of nums){
            //find the smallest num first
            if(!set.has(num - 1)){
                let currNum = num;
                let currStreak = 1;


                //going forwards in a chain
                while(set.has(currNum + 1)){
                    currNum += 1;
                    currStreak+=1;
                }
                maxLength = Math.max(currStreak,maxLength)
            }
        }

        return maxLength;
    }
}
