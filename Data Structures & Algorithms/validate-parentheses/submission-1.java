class Solution {
    public boolean isValid(String s) {
        
        HashMap closeToOpen = new HashMap();

        closeToOpen.put(')' , '(');
        closeToOpen.put(']' , '[');
        closeToOpen.put('}' , '{');

        Stack stack = new Stack();

        for (int i = 0; i <s.length();i++){
            char c = s.charAt(i);

            if(closeToOpen.containsKey(c)){

                if (!stack.isEmpty() && stack.peek() == closeToOpen.get(c)){
                    stack.pop();
                }else{
                    return false;
                }
            }else{
                stack.push(c);
            }
        }
    return stack.isEmpty();


    }
}
