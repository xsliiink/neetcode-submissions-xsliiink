class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // counting how often fo elements occur 
        const map = new Map();
        for (let num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        //creating a bucket array for ccessing the frequency
        const buckets = Array.from({ length: nums.length + 1 }, () => []);
        
        //putting the nums into athe array
        for (let [num, freq] of map) {
            buckets[freq].push(num);
        }

        //getting the elements from the enf to res.length === k
        const res = [];
        for (let i = buckets.length - 1; i >= 0; i--) {
            // does this array contain any nums?
            for (let num of buckets[i]) {
                res.push(num);
                //when we got our desired first k nums return res
                if (res.length === k) {
                    return res;
                }
            }
        }
        
        return res;
    }
}