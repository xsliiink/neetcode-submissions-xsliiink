class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let maxFreq = 0;
        let map = {};
        let maxLen = 0

            for(let right = 0;right < s.length;right++){
                let curr = s[right];
                map[curr] = (map[curr] || 0) + 1;

                maxFreq = Math.max(map[curr],maxFreq);

                while((right - left + 1) - maxFreq > k){
                    map[s[left]]--;
                    left++;
                }
                maxLen = Math.max(maxLen,(right - left + 1))
            }
        return maxLen;
    }
}
