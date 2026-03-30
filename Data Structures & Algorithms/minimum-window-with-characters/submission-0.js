class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let window = {}
        let have = 0;
        let left = 0;
        let minLen = Infinity;
        let countT = {};
        let res = [];
        
        //counting all the letters in a susbstring
        for (let char of t){
            countT[char] = (countT[char] || 0) + 1;
        }

        //counting how many unique elements we need
        let need = Object.keys(countT).length;

        for(let right = 0;right < s.length;right++){
            let char = s[right];

            //adding an element to the window
            window[char] = (window[char] || 0) + 1;

            //if the char is in both window and t and its count is enough have++
            if(countT[char] && window[char] === countT[char]){
                have++;
            }

            //checking the validity
            while(have === need){
                //checking if the current length is optimal
                if((right - left + 1)   < minLen){
                    res = [left,right];
                    minLen = right - left + 1;
                }


                let leftChar = s[left];
                //deleting it from our window
                window[leftChar]--;

                if(countT[leftChar] && window[leftChar] < countT[leftChar]){
                    have--;
                }

                left++;
            }
        }
        return s.substring(res[0],res[1] + 1)
    }
}
