class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let i = 0;
        let res = []


        //case 1
        while(i < intervals.length && intervals[i][1] < newInterval[0]){
            res.push(intervals[i]);
            i++
        }

        //case2
        while(i < intervals.length && intervals[i][0] <= newInterval[1]){
            newInterval[0] = Math.min(intervals[i][0],newInterval[0]);
            newInterval[1] = Math.max(intervals[i][1],newInterval[1]);
            i++;
        }
        res.push(newInterval);

        //case3
        while(i < intervals.length){
            res.push(intervals[i]);
            i++;
        }

        return res;
               
    }
}
