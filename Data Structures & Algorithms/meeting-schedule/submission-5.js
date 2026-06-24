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

        if (intervals.length <= 1) return true;
        
        //sort the intervals first
        intervals.sort((a,b) => a.start - b.start)
        
        let prev = intervals[0].end;

        for(let i = 1;i < intervals.length;i++){
            if(intervals[i].start < prev){
                return false
            }

            prev = intervals[i].end;
        }

        return true;
    }
}
