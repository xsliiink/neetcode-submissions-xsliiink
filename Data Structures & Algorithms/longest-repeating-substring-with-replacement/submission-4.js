class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        //create the ledt an right pointer
        let left = 0;
        let maxFreq = 0;

        //сreate the hashset to store the occurences of an element
        let seen = {};
        let res = 0;

        for(let right = 0;right < s.length;right++){
            //add the char to the seen list and compare to the most Freq one
            seen[s[right]] = (seen[s[right]] || 0) + 1;

            //finfing the most frequent element
            maxFreq = Math.max(seen[s[right]],maxFreq);

            if((right - left + 1) - maxFreq >k){
                //moving the left pointer if the window has exceed the bounds
                seen[s[left]] -=1;
                left++;
            }

            res = Math.max((right - left + 1),res);

        }
        return res;
    }
}
