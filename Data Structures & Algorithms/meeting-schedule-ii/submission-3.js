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
        let count = 0;
        let j = 0;
        let res = 0;


        //put intervals in different buckets
        for(let interval of intervals){
            starts.push(interval.start);
            ends.push(interval.end);
        }

        //sort the intervals separately
        starts.sort((a,b) => a - b)
        ends.sort((a,b) => a - b)

        //see if there's any intersection(Two pointers)
        for(let i = 0;i < intervals.length;i++){
            if(starts[i] < ends[j]){
                count++;
            }else{
                j++;
            }
            res = Math.max(count,res);
        }

        return res;
    }
}
