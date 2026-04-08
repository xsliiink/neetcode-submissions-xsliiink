class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        const seen ={}
        let maxFreq = 0;
        let left = 0;
        let res = 0;

        for(let right = 0;right < s.length;right++){
            seen[s[right]] = (seen[s[right]] || 0) + 1;

            //finding the most frequent element
            maxFreq = Math.max(maxFreq,seen[s[right]]);

            if((right - left + 1) - maxFreq > k){
                seen[s[left]] -= 1;
                left++;
            }

            res = Math.max(res,(right - left + 1))
        }
        return res;
    }
}
