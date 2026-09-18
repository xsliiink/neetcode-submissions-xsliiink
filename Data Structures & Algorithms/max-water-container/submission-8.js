class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let maxVol = 0;

        while(left < right){
            let currHeight = Math.min(heights[left],heights[right]);
            let currVol = currHeight* (right - left);
            maxVol = Math.max(currVol,maxVol);

            if(heights[right] < heights[left]){
                right--;
            }else if (heights[right] > heights[left]){
                left++
            }else{
                right--;
                left++
            }

        }

        return maxVol;
    }
}
