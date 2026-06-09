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
        let starts = [];
        let ends = [];
        let rooms = 0;

        for(let interval of intervals){
            starts.push(interval.start);
            ends.push(interval.end);
        }

        //sort the elements out
        starts.sort((a,b) => a - b);
        ends.sort((a,b) => a - b);

        let pt1 = 0;
        let pt2 = 0;

        while(pt1 < starts.length){
            if(starts[pt1] < ends[pt2]){
                pt1++;
                rooms++;
            }else{
                pt2++;
                pt1++;
            }
        }

        return rooms;
    }
}
