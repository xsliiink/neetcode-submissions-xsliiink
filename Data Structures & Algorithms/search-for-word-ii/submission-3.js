class TrieNode{
    constructor(){
        this.children = {};
        this.isWord = false;
        this.word = "";
    }
}

class Solution {
    constructor(){
        this.root = new TrieNode();
    }
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {

        let rows = board.length;
        let cols = board[0].length;
        let res = [];

        //first put all the words in a Trie;
        for(let word of words){
            
            let node = this.root;

            for(let char of word){
                if(!node.children[char]){
                    node.children[char] = new TrieNode();
                }

                node = node.children[char];
            }
            node.isWord = true;
            node.word = word;
        }

        let dfs = (r,c,node) => {
            //base case
            if(r >= rows || c >= cols || r < 0 || c < 0 || !node.children[board[r][c]] || board[r][c] === "*"){
                return false;
            }

            //entering this node
            node = node.children[board[r][c]]

            //found the word?
            if(node.isWord){
                res.push(node.word);
                node.isWord = false;
            }

            //backtracking + recursion
            let temp = board[r][c]
            board[r][c] = "*"


            dfs(r + 1,c,node)
            dfs(r - 1,c,node)
            dfs(r,c + 1,node)
            dfs(r,c - 1,node)

            board[r][c] = temp
        }

        //loop throgh the board
        for(let r = 0;r < rows;r++){
            for(let c = 0;c < cols;c++){
                dfs(r,c,this.root);
            }
        }
        return res;
    }
}
