class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let map = new Map();

        //first check the length of the strs
        if(s.length !== t.length) return false

        for(let char of s){
            map.set(char,(map.get(char) || 0) + 1);
        }

        //now just remove the chars from the map
        for(let char of t){
            if(!map.has(char) || map.get(char) === 0){
                return false;
            }
            map.set(char,(map.get(char) || 0)  - 1);
        }

        return true;
    }
}
