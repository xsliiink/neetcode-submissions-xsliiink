class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
       
        //counting WHAT and HOW MANY chars we need
        let need = {};
        for(let char of t){
            need[char] = (need[char] || 0) + 1;
        }

        //counting HOW MANY chars we need
        let required = Object.keys(need).length;
        let formed = 0;
        let left = 0;

        //length : left: right
        let ans = [-1,0,0]

        //what we HAVE
        let window = {};

        //the amount of chars that we have
        for(let right = 0;right < s.length;right++){
            let curr = s[right];
            window[curr] = (window[curr] || 0) + 1;

            //seeing if the char is in need
            if(need[curr] && need[curr] == window[curr]){
                formed++
            }

            //decreasinf the window
            while(left <= right && formed == required){

                let char = s[left];

                if(ans[0] == -1 || (right - left + 1) < ans[0]){
                    ans = [(right - left) + 1,left,right]
                }

                //deleting the symbol
                window[char]--;

                //if we lost the letter
                if(need[char] && need[char] > window[char]){
                    formed--;
                }

                left++
            }
        }


        return ans[0] === -1 ? "" : s.substring(ans[1],ans[2] + 1)
    }
}
