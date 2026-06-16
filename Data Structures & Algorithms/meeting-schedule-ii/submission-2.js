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
        let s = 0;
        let e = 0;
        let rooms = 0;
        let maxRooms = 0;

        for(let interval of intervals){
            starts.push(interval.start);
            ends.push(interval.end);
        }
        
        //sort the arrs
        starts.sort((a,b) => a - b);
        ends.sort((a,b) => a - b);

        while(s < starts.length){
            if(starts[s] < ends[e]){
                //taking a room;
                rooms++;
                s++;
                //we need to find the most loaded time during the day
                maxRooms = Math.max(rooms,maxRooms);
            }else{
                rooms--;
                e++;
            }
        }
        
        return maxRooms;
    }
}
