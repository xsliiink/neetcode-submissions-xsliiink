class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let seen = new Set();
        let maxLen = 0;
        let left = 0;

        if(s.length === 0) return 0

        //expand the window + add chars to set
        for(let right = 0;right < s.length;right++){

            while(seen.has(s[right])){
                seen.delete(s[left])
                left++;
            }

            seen.add(s[right]);

            maxLen = Math.max(maxLen,right - left + 1)

        }

        return maxLen;
    }
}
