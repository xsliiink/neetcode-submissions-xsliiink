class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let left = 0;
        let maxCount = 0;
        const charSet = new Set();

        for(let right = 0;right < s.length;right++){

            //found a duplicate
            while(charSet.has(s[right])){
                //deleting the most left symbol
                charSet.delete(s[left]);
                left++;
            }

            //adding the right symbol
            charSet.add(s[right]);

            let currentSizeWindow = right - left + 1;
            maxCount = Math.max(maxCount,currentSizeWindow);
        }
        return maxCount;
    }
}
