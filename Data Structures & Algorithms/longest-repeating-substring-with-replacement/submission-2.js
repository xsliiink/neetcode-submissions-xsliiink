class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        
        const map = {}

        let left = 0;
        let maxFreq = 0;
        let res = 0

        for(let right = 0;right < s.length;right++){
            //adding chars to the map
            map[s[right]] = (map[s[right]] || 0) + 1;

            //finding the most frequent element
            maxFreq = Math.max(map[s[right]],maxFreq);

            //if the window is too big remove the the last char
            if((right - left + 1) - maxFreq > k){
                //deleting this char from map
                map[s[left]] -= 1;

                left++;
            }

            res = Math.max(res,(right - left + 1));
        }
        return res;
    }
}