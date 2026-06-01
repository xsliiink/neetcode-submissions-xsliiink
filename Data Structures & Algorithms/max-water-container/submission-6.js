class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;

        let max_volume = 0;

        while(left< right){
            let height = Math.min(heights[right],heights[left]);

            let curr_vol = (right - left)*height;

            max_volume = Math.max(max_volume,curr_vol);

            if(heights[left] > heights[right]){
                right--;
            }else{
                left++;
            }
        }

        return max_volume;
    }
}
