class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        

        //create a hashmap
        const map = new Map();

        //count the frequent elements
        for (let n of nums){
            map.set(n,(map.get(n) || 0) + 1);
        }

        //now create the buckets
        const buckets = Array.from({length: nums.length + 1},() => []);

        //place the elements into the buckets
        for(let [num,frequency] of map){
            buckets[frequency].push(num);
        }


        const res = [];
        //now display first k frequent elements
        for(let i = buckets.length - 1;i >= 0;i--){

            for(let num of buckets[i]){
                res.push(num);

                if(res.length === k){
                    return res;
                }
            }
        }

    }
}
