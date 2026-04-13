class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {

        //create a resulting interval variable
        let i = 0;
        let result = []

        //looping through the intervals

        while(i < intervals.length && intervals[i][1] < newInterval[0]){
            //if the end og the interval is smaller than the beginning of the new add it to the left
                result.push(intervals[i]);
                i++
            
        }


        //case 2
        while(i < intervals.length && intervals[i][0] <= newInterval[1]){
            newInterval[0] = Math.min(newInterval[0],intervals[i][0]);
            newInterval[1] = Math.max(newInterval[1],intervals[i][1])
            i++;

        }

        //now push that interval
        result.push(newInterval);

        //case3
        while(i < intervals.length){
            result.push(intervals[i]);
            i++;
        }
        
        return result;
            
    }
}
