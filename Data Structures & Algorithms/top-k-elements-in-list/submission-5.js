class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let hashMap = new Map();

        for(let num of nums){
            hashMap.set(num,(hashMap.get(num) || 0) + 1);
        }

        //taking the entries and sorting them
        return [...hashMap.entries()]
        .sort((a,b) => b[1] - a[1])
        .slice(0,k)
        .map(pair => pair[0])
    }
}
