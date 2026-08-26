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
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        //sort the starts and ends
        let starts = intervals.map(i => i.start).sort((a,b) => a - b);
        let ends = intervals.map(i => i.end).sort((a,b) => a - b);


        let rooms = 0;
        let s = 0;
        let e = 0;

        while(s < intervals.length){
            if(starts[s] < ends[e]){
                s++;
                rooms++
            }else{
                s++;
                e++;
            }
        }

        return rooms;
    }
}
