class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        let i = 0;

        let res = []

        //sorting the elements by the end
        intervals.sort((a,b) => a[1] - b[1]);

        let prev_end = (intervals[0])[1];
        let keep = 1;

        //loop through the intervals
        for(let interval of intervals){
            if(interval[0] >= prev_end){
                keep++;
                prev_end = interval[1]
            }
        }
        
        //
        return (intervals.length - keep);
        
    }
}
