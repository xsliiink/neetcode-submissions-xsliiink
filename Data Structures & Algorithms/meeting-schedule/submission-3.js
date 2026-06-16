/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        //sort the intervals by the start first
        intervals.sort((a,b) => a.start - b.start)

        if(intervals.length === 0) return true;

        let prev = intervals[0].end;

        //compare the intervals
        for(let i = 1;i < intervals.length;i++){
            if(intervals[i].start < prev){
                return false;
            }

            prev = intervals[i].end;
        }

        return true;
    }
}
