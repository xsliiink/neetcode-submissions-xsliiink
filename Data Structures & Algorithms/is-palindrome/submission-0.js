class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        //using regex to clean the str
        const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g,'');

        //setting the pointers
        let left = 0;
        let right = cleanStr.length - 1;

        //moving towards each other
        while(left< right){
            if(cleanStr[left] !== cleanStr[right]){
                return false;
            }
            left++;
            right--;
        }

        return true;
    }
}
