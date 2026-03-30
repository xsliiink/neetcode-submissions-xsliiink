class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        let left = 0;
        let right = heights.length - 1;
        let maxArea = 0;

        while(left< right){
            let width = (right - left );

            if(heights[left] < heights[right]){
                let height = heights[left]
                let currArea = width * height;

                //need to calculate the max area
                maxArea = Math.max(currArea,maxArea);
                left++;
            }else{
                let height = heights[right]
                let currArea = width * height;

                maxArea = Math.max(currArea,maxArea);
                right--
            }
        }
        return maxArea;
    }
}
