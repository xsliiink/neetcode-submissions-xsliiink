class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxLengthBetweenEqualCharacters(s) {
        if(s.length === 0) return -1;

        let firstIndex = new Map();
        let maxLength = -1;

        for(let i = 0;i < s.length;i++){

            if(firstIndex.has(s.charAt(i))){
                //calculating the distance
                maxLength = Math.max(maxLength,i - firstIndex.get(s.charAt(i)) - 1);
            }else{
                firstIndex.set(s.charAt(i),i);
            }
        }

        return maxLength;
    }
}
