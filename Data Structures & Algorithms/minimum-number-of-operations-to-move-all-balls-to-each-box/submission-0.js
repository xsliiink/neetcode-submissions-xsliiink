class Solution {
    /**
     * @param {string} boxes
     * @return {number[]}
     */
    minOperations(boxes) {
        
        const n = boxes.length;
        const res = new Array(n).fill(0);

        let count = 0;
        let moves = 0;

        for(let i = 0;i < n;i++){
            res[i] += moves;
            if(boxes[i] == '1') count++;
            moves+= count;
        }   

        count = 0;
        moves = 0;

        for(let i = boxes.length - 1;i >= 0;i--){
            res[i] += moves;
            if(boxes[i] === '1') count++;
            moves+= count;
        }


        return res;
    }
}
