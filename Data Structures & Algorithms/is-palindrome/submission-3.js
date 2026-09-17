class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let right = s.length - 1;
        let left = 0;

        while(left <right){
            while( left < right && !this.isAlphaNumeric(s[left])){
                left++
            }

            while(left < right && !this.isAlphaNumeric(s[right])){
                right--
            }

            //compare the symbols
            if(s[left].toLowerCase() !== s[right].toLowerCase()){
                return false
            }

            left++;
            right--
        }

        return true;
    }

    isAlphaNumeric(char){
        const code = char.charCodeAt(0);
        return(code >= 48 && code <= 57) || 
                (code >=65 && code <= 90) ||
                (code >= 97 && code <= 122);
    }
}
