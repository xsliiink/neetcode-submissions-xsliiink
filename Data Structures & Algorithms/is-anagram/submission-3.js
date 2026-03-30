class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        //is s length does not equal t length retun false or ig any of them are empty return false as well
        if(s.length != t.length || s.length == 0 || t.length == 0) return false;

        //create a hash map to store the occurances of a letter
        const seen = new Map();

        //run a loop through the first word.Add all the chars to the hash map
        for (let i = 0; i < s.length;i++){
            if(seen.has(s[i])){
                seen.set(s[i], seen.get(s[i]) + 1);
            }else{
                seen.set(s[i],1);
            }   
        }
        // console.log(seen);

        //run a second loop,remove all the chars from the hash map

        for (let i = 0; i < t.length;i++){
            if(seen.has(t[i]) && seen.get(t[i]) > 0){
                seen.set(t[i],seen.get(t[i]) - 1);
            }else{
                return false;
            }
        }

        if(seen.size === 0) return false;


        //if the hasdmap is empty return true
         return true;
        //else return false
    }
}
