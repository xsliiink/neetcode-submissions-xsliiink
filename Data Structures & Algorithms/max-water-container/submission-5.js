class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        //create two pointers
        let left = 0;
        let right = heights.length - 1;

        let maxArea = 0;

        while(left < right){
            let height = Math.min(heights[left],heights[right]);

            let area = height * (right - left);

            if(heights[left] > heights[right]){
                right--;
            }else{
                left++;
            }

            maxArea = Math.max(area,maxArea);
        }
        return maxArea
    }
}
