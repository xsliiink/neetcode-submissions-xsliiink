class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        let left = 0
        let right = heights.length -1;
        let area = 0;
        
        while(left < right){
            let distance = right - left;
            let currArea = 0;
            if(heights[left] < heights[right]){
                let h = Math.min(heights[left],heights[right])
                currArea = h * distance;
                left++;
            }else{
                let h = Math.min(heights[left],heights[right])
                currArea = h * distance;
                right--;
            }
            area = Math.max(currArea,area);
        }
        return area;
    }
}
