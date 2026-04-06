class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0
        let right = heights.length - 1;

        let maxCount = 0

        while(left < right){

            let height = Math.min(heights[left],heights[right]);
            let currCount = height * (right - left);

            maxCount = Math.max(currCount,maxCount);
            
            if(heights[left] < heights[right]){
                left++
            }else{
                right--;
            }
        }
        return maxCount;
    }
}
