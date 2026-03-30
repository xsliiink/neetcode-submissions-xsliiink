class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        //first we need to create a response str
        let res = '';
        for(let i = 0; i< strs.length;i++){
            res = res + strs[i].length + '#' + strs[i];
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        //now we need to create an arr
        const res =  [];
        let i = 0;

        while(i < str.length){
            let j = str.indexOf('#',i);

            let substr = str.substring(i,j);
            let str_length = parseInt(substr);
            
            res.push(str.substring(j + 1, j + 1 + str_length));

            i = j + 1 + str_length;
        }
        return res;
    }

}
