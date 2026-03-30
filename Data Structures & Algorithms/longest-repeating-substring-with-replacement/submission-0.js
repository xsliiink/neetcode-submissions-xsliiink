class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        let left = 0;
        let maxFreq = 0;
        const map = {};
        let res = 0;

        //moving the right boder of the window
        for (let right = 0; right < s.length;right++){
            //adding the new symbols to the HashMap
            map[s[right]] = (map[s[right]] || 0) + 1;

            //finding the most frequent number
            maxFreq = Math.max(maxFreq,map[s[right]]);

            //if our window id too big remove the last char
            if((right - left + 1) - maxFreq > k){
                map[s[left]] -= 1;
                left++;
            }

            res = Math.max(res,(right - left + 1))
        }
        return res;
    }
}
