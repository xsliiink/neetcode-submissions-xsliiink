class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        //lets start with finsinf the most frequent element

        //create a map for storing the frequency
        let freq = new Map();


        for(let num of nums){
            if(!freq.has(num)){
                freq.set(num,1)
            }else{
                freq.set(num,freq.get(num) + 1);
            }
        }
        
        //now we need to return the k most frequent

        //1.Create buckets
        let buckets = Array.from({length: nums.length + 1},() => []);

        for(const [num,count] of freq.entries()){
            buckets[count].push(num);
        }

        //take the first k elements out of buckets from the end
        const result = [];

        for(let i = buckets.length - 1; result.length < k && i>= 0;i--){
            if(buckets[i].length > 0){
                result.push(...buckets[i]);
            }
        }
        
        return result.slice(0,k)

    }
}
