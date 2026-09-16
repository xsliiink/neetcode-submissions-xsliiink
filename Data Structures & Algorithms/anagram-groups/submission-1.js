class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();

        for(let str of strs){
            let count = new Array(26).fill(0);

            for(let i = 0;i < str.length;i++){
                count[str.charCodeAt(i) - 97]++
            }
            
            const key = count.join('#');

            if(!map.has(key)){
                map.set(key,[])
            }

            map.get(key).push(str);
        }

        //returning the array of all existing strs
        return Array.from(map.values());
    }
}
