class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(flowerbed, n) {

        for(let i =0;i < flowerbed.length;i++){


            if(flowerbed[i] == 0){
                const leftEmpty = flowerbed[i - 1] == 0 || (i == 0)
                const rightEmpty = flowerbed[i + 1] == 0 || (i == flowerbed.length - 1);

                if(leftEmpty && rightEmpty){
                    //plant a flower
                    flowerbed[i] = 1;
                    n--;
                }
            }
        }

        return n <= 0;
    }
}
