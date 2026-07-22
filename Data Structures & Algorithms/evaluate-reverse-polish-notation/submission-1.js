class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {

        let stack = [];
        let res = 0;

        for(let i = 0;i < tokens.length;i++){
            let curr = tokens[i];
            let res = 0

            if(curr == "-" || curr == "+" || curr == "/" || curr == "*"){
                //taking two elements out of the stack
                let num1 = Number(stack.pop());
                let num2 = Number(stack.pop());

                if(curr == "+") res = num1 + num2;
                if(curr == "-") res = num2 - num1;
                if(curr == "*") res = num2 * num1;
                if(curr == "/") res = Math.trunc(num2 / num1);

                stack.push(res);
                
            }else{
                stack.push(curr);
            }
        }

        return Number(stack.pop());


    }
}
