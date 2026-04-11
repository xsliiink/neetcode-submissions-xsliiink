class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {

        let have = {}
        let need = {}

        for(let i = 0;i< t.length;i++){
            need[t[i]] = (need[t[i]] || 0) + 1;
        }

        let need_count = Object.keys(need).length;
        let have_count = 0;

        let left = 0;
        let right = 1;

        let minLen = Infinity;
        let res = [-1,-1]


        for(let right = 0;right < s.length;right++){

            let char = s[right]

            //adding element to the map
            have[char] = (have[char] || 0)  + 1

            //checking if have equals need
            if(need[char] && (need[char] == have[char])){
                have_count++
            }

            //if we found the needed amount of chars see if we can decrease the window
            while(have_count == need_count){
                //recalculating the minLen 
                if((right - left + 1) < minLen){
                    minLen = right - left + 1;

                    //change the response
                    res = [left,right]
                }

                //now lets check if we have deleted the char
                let leftChar = s[left];
                have[leftChar]--;

                if(need[leftChar] && (have[leftChar] < need[leftChar])){
                    have_count--;
                }

                left++
            }
        }
        
        return s.substring(res[0],res[1] + 1)
    }
}
