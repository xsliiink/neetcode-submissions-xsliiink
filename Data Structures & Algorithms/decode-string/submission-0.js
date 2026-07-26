class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let stack = []
        let current_num = 0;
        let current_str = ""

        //we need to loop through the str
        for(let char of s){
            if(char >= 0 && char <= 9){
                current_num = current_num * 10 + Number(char)
            }

            else if(char == "["){
                //push it straight away to the stack
                stack.push([current_num,current_str])

                //set variables to zero
                current_str = "";
                current_num = 0;
            }
            else if(char != "]"){
                //making the curr str longer
                current_str += char;
            }else{
                //time to take everything out of the stack
                let [num,prev_str] = stack.pop();
                current_str = prev_str + current_str.repeat(num)
            }   
        }
        return current_str;
    }
}
