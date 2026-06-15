class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        //create hashmap
        let map = new Map();
        let res = [];

        //count frequency and put into map
        for(let num of nums){
            map.set(num,(map.get(num) || 0)  + 1)
        }

        //put the elements into buckets
            //initialize a bucket
            let buckets = Array.from({length: nums.length + 1},() => [])

            for(let [elem,frequency] of map){
                buckets[frequency].push(elem)
            }

        //return first k elements(start from the bottom)
        for(let i = buckets.length - 1;i > 0;i--){
            
            for(let num of buckets[i]){
                res.push(num);
            }


            if(res.length === k){
                return res;
            }
        }
    }
}
