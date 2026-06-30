class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let res = [];
        let i = 0;

        while(i < intervals.length && intervals[i][1] < newInterval[0]){
            res.push(intervals[i]);
            i++
        }

        //creating a superinterval
        while(i < intervals.length && intervals[i][0] <= newInterval[1]){
            newInterval[1] = Math.max(newInterval[1],intervals[i][1]);
            newInterval[0] = Math.min(intervals[i][0],newInterval[0])
            i++
        }

        res.push(newInterval);

        while(i < intervals.length){
            res.push(intervals[i])
            i++
        }

        return res
    }
}
