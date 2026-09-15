class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length !== t.length) return false;

        let seen = new Array(26).fill(0);

        for(let i = 0;i < s.length;i++){
            seen[s.charCodeAt(i) - 97]++;
            seen[t.charCodeAt(i) - 97]--;
        }

        return seen.every(val => val === 0);
    }
}
