class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {

        let window = {}
        let countT = {}
        let left = 0;
        let minLen = Infinity;
        let have = 0;
        let res = [-1,-1]

        //first we need to count the number of chars in T
        for(let char of t){
            countT[char] = (countT[char] || 0) + 1;
        }

        //now we need to know the length of it
        let need = Object.keys(countT).length;

        //
        for(let right = 0; right < s.length;right++){
            let char = s[right];

            //adding chars from s to the window
            window[char] = (window[char] || 0) + 1;

            //if we have the exact num of chars in s corresponding to the num of chars in T have++
            if(countT[char]&& countT[char] === window[char]){
                have++;
            }

            //if we have found the needed amount of chars see if we can decrease the window 
            while(have === need){
                if((right - left + 1 ) < minLen){
                    minLen = right - left + 1;
                    
                    //change the response
                    res = [left,right];
                }

                //now we are moving the left border to see if we have deleted the char
                let leftChar = s[left];
                window[leftChar]--;

                if(countT[leftChar] && window[leftChar] < countT[leftChar]){
                    have--
                }

                left++;
            }
        }
        return s.substring(res[0],res[1] + 1);
    }
}
