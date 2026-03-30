class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {}

        //taking an array of string a staring to loop through them
        for(let s of strs){
            //creating an array with 26 0's
            const count = new Array(26).fill(0);

            for(let char of s){
                //Subtracting ASCII cvalue of a(97) to find a position in the array
                count [char.charCodeAt(0) - 'a'.charCodeAt(0)]++;

            }

            
            const key = count.join('#');

            //turning an array into a string 1#0#2#0...
            if(!res[key]){
                res[key] = [];
            }
            res[key].push(s);
        }

        return Object.values(res);
    }


}
