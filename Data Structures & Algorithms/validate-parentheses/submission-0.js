class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []

        const closeToOpen = {
            ')' : '(',
            ']' : '[',
            '}' : '{'
        }

        for (let char of s){
            if(closeToOpen[char]){
                const topElement  = stack.length > 0 ? stack.pop() : '#'

                if (topElement != closeToOpen[char]){
                    return false;
                }
            }else{
                stack.push(char)
            }
        }
    return stack.length === 0;
    }
}
