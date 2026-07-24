class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {

        let res = [];
        const part = [];

        const isPalindrome = (str,start,end) => {
            while(start < end){
                if(str[start] !== str[end]){
                    return false;
                }

                start++;
                end--;
            }
            return true;
        }

        const dfs = (start) => {
           
           //base case
           if(start >= s.length){
             res.push([...part])
             return;
           }

            //start the cycle
            for(let end = start;end < s.length;end++){
                if(isPalindrome(s,start,end)){
                    //Choose
                    part.push(s.substring(start, end + 1));

                    // 2. Explore
                    dfs(end + 1);

                    // 3. Unchoose
                    part.pop();

                }
            }

        }

        dfs(0)
        return res
    }

    
}
