class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        //create a hasmap
        let countMap = new Map();
        let res = []

        //count the elements
        for(let num of nums){
            countMap[num] = (countMap[num] || 0) + 1;
        }

        let buckets = Array.from({length: nums.length + 1},() => [])

        //put the elements into buckets
        for(let [num,frequency] of Object.entries(countMap)){
            buckets[frequency].push(num)
        }

        //now return n most frequent elements
        for(let i = buckets.length; i >= 0; i--){
            if(buckets[i]){
                for(let num of buckets[i]){
                    res.push(num);
                    if(res.length === k) return res
                }
            }
        }
    }
}
