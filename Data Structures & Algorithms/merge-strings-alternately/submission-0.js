class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {

        let length = Math.min(word1.length,word2.length);
        let new_str = ''

        for(let i = 0 ;i < length;i++){
            new_str += word1.charAt(i);
            new_str += word2.charAt(i);
        }

        if(word1.length < word2.length){
            new_str += word2.substring(length);
        }else{
            new_str += word1.substring(length);
        }

        return new_str;
    }
}
