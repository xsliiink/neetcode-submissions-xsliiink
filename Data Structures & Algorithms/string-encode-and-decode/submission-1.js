class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        //we need to go through every word and divide it thorugh {length}#str

        let result = '';

        for(let str of strs){
            result+=  str.length + '#' + str;
        }

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        //now we need to look for the first hash
        let result = [];
        let i = 0;

        while(i < str.length){
            let j = i;
        
            //moving j until we see a hash(#)
            while(str[j] !== '#'){
                j++;
            }

            let length = parseInt(str.substring(i,j));

            //cut the word out
            let word = str.substring(j + 1,j + 1 + length);
            result.push(word);

            i = j + 1 + length
        }
        return result
    }
}
