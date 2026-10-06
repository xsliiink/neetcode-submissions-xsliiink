class Solution {
    /**
     * @param {number[]} fruits
     * @return {number}
     */
    totalFruit(fruits) {

         let left = 0;
         //counting the keys in the window
        let map = new Map();
        let best = 0;

        for(let right = 0;right < fruits.length;right++){

            //add a symbol
            map.set(fruits[right],(map.get(fruits[right]) || 0) + 1);

            while(map.size > 2){

                map.set(fruits[left],map.get(fruits[left]) - 1);

                if(map.get(fruits[left]) == 0){
                    map.delete(fruits[left]);
                }

                left++;
            }

            best = Math.max(best,right - left + 1)
        }

        return best
    }
}
