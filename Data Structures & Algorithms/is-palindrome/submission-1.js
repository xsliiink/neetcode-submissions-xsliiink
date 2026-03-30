class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        const clean = s.toLowerCase().replace(/[^a-z0-9]/g, '')

        let left = 0;
        let right = clean.length - 1;


        while(left < right){
            if (clean[left] !== clean[right]){
                return false;
            }

            left++;
            right--;
        }
        return true;
    }
}
