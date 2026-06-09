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

        intervals.sort((a,b) => a.start -b.start)

        let end_interval = - Infinity;

        for(let interval of intervals){
            if(interval.start < end_interval){
                return false;
            }
            end_interval = interval.end;
        }

        return true;
    }
}
