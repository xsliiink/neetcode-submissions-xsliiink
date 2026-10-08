class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {

        let curr = 0;

        for(let i = 0;i < s.length;i++){

            if(s.charAt(i) == t.charAt(curr)){
                curr++;
            }
        }   

        //append the chars to the end of the str
        return t.length - curr;
    }
}
