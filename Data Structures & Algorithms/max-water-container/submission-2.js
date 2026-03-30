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

            
                let height = Math.min(heights[left],heights[right])
                let currArea = width * height;

                //need to calculate the max area
                maxArea = Math.max(currArea,maxArea);
                
                if (heights[left] < heights[right]) {
                    left++;
                } else {
                    right--;
            }
            
        }
        return maxArea;
    }
}
