class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        //defining the current arrSum
        let currentSum = 0;

        //defining the currnet nums index
        let currIndex = 0;

        //creating the current arr
        const currentArr = [];

        //resulting arr
        const result = [];

        //creating a dfs function
        function dfs(i,currentSum,currArr){

            //succesfull case
            if (currentSum === target){
                result.push([...currArr])
                return result;
            }

            //Loosing case
            if(currentSum > target || i >= nums.length){
                return
            }

            //now try to call recursion with the same num
            currArr.push(nums[i]);
            dfs(i,currentSum + nums[i],currArr)

            //Backtracking
            currArr.pop();

            //Trying to call recursion with the next num
            dfs(i + 1,currentSum,currArr);
            
            return result;
        }
        return dfs(currIndex,currentSum,currentArr);
        
    }

}
