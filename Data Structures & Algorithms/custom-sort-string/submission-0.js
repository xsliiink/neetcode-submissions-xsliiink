class Solution {
    /**
     * @param {string} order
     * @param {string} s
     * @return {string}
     */
    customSortString(order, s) {
        const freqMap = new Map();
        let res = '';

        for(let char of s){
            freqMap.set(char,(freqMap.get(char) || 0) + 1);
        }

        //now output all the chars if they are in order
        for(let char of order){
            if(freqMap.has(char)){
                let count = freqMap.get(char);
                res += char.repeat(count);
                freqMap.delete(char);
            }
        }

        //output ht rest of the chars
        for(let [char,count] of freqMap){
            res+= char.repeat(count);
        }

        return res;
    }
}
