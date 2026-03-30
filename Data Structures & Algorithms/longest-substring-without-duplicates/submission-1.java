class Solution {
    public int lengthOfLongestSubstring(String s) {
        
        HashSet seen = new HashSet();
        int left = 0;
        int maxLen = 0;

        for (int i = 0; i < s.length();i++){
            char currentChar = s.charAt(i);
            
            //если символ уже есть?сужаем окно слева
            while(seen.contains(currentChar)){
                seen.remove(s.charAt(left));
                left++;
            }

            seen.add(currentChar);
            
            maxLen = Math.max(maxLen,i - left  + 1);
        }
        return maxLen;
    }
}
