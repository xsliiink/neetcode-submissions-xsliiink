class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {

        const rows = board.length;
        const cols = board[0].length;

        for(let i = 0;i < rows;i++){
            for(let j = 0;j < cols;j++){

                if(dfs(i,j,0)) return true;
            }
        }

        function dfs(i,j,k){
            //win
            if(k === word.length) return true;

            if(i < 0 || j < 0 || i >= rows || j >= cols || board[i][j] !== word[k]) return false;

            //marking the slot
            let temp = board[i][j];
            board[i][j] = '#'

            let found = dfs(i + 1,j,k+1) ||
                        dfs(i - 1,j,k+1) || 
                        dfs(i,j + 1,k+1) ||
                        dfs(i,j - 1,k+1)

            //backtracking
            board[i][j] = temp;

            return found;
        }
        return false;
    }
}
