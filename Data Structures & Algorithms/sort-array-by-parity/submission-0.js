class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArrayByParity(nums) {
        //use buckets for this task;

        let buckets = Array.from({length: 2},() => []);


        for(let num of nums){
            if(num %2 === 0){
                buckets[0].push(num);
            }else{
                buckets[1].push(num);
            }
        }

        //join the buckets
        return [...buckets[0],...buckets[1]]
    }
}
