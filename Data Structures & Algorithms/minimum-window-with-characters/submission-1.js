class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {

        let window = {}
        let left = 0;
        let countT = {};
        let have = 0;
        let minLen = Infinity;
        let res = [-1,-1];
        
        //count the letters int t
        for (let char of t){
            countT[char] = (countT[char] || 0) + 1;
        }

        //we need to know how may unqiue elements are in the object
        let need = Object.keys(countT).length;

        //
        for(let right = 0;right < s.length;right++){
            let char = s[right];

            //adding the lement to the window
            window[char] = (window[char] || 0) + 1;
            
            //if the lettter is in the T string and the amount of this letter is exat have++
            if(countT[char] && window[char] == countT[char]){
                have++;
            }

            while(have === need){
                if((right - left + 1) < minLen){
                    minLen = right - left + 1;
                    res = [left,right]
                }

                //now we need to move the left border and check if we have deleted the char
                let leftChar = s[left];
                window[leftChar]--;

                if(countT[leftChar] && window[leftChar] < countT[leftChar]){
                    have--;
                }

                left++
            }
        }
    return s.substring(res[0],res[1] + 1);
    }
}
