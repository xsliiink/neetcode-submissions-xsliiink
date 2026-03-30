class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        //if the sting length is different they can't be anagrams
        if(s.length != t.length) return false;

        //hash table with numbers of instances of each letter
        const count = {};

        //adding letters to the hash map
        for (let char of s){
            //is there a letter already in the hash map?if yes take it,no - take 0 and add1 
            count[char] = (count[char] || 0) + 1;
        }

        //taking letters away from the hash map
        for(let char of t){
            if(!count[char]){
                return false;
            }

            count[char]--;
        }
        return true;
    }
}
