class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        //using frequency arr to store the freq
        let freq = new Array(26).fill(0);
        let maxFreq = 0;
        let maxLen = 0;
        let left = 0;

        for(let right = 0;right < s.length;right++){
            //adding the curr element to arr
            let rightIndex = s[right].charCodeAt(0) - 65;
            freq[rightIndex]++;

            //finding the maxFreq in this window
            maxFreq  = Math.max(maxFreq,freq[rightIndex])

            //checking if the window is valid
            while((right - left + 1) - maxFreq > k){
                let leftIndex = s[left].charCodeAt(0) - 65;
                freq[leftIndex]--;
                left++;
            }

            maxLen = Math.max(right - left + 1,maxLen);
        }

        return maxLen
    }
}
