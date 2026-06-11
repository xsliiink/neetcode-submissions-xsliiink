class TrieNode{
        constructor(){
            this.children = {}
            this.isWord = false;

            this.word = "";
        }
    }

    class Trie{
        constructor(){
            this.root = new TrieNode();
        }

        insert(word){
            let node = this.root;

            for(let char of word){
                if(!node.children[char]){
                    node.children[char] = new TrieNode();
                }

                //dfs into the word
                node = node.children[char];
            }

            //when the word has ended add it to the final trie node
            node.word = word;
        }
    }

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        let res = [];
        let rows = board.length;
        let cols = board[0].length;

        const trie = new Trie();
        
        //putting all the words in a Trie
        for(let word of words){
            trie.insert(word)
        }

        const dfs = (r,c,node) => {

            //base case
            if(r >= rows || c >= cols || r < 0 || c < 0 || !node.children[board[r][c]]){
                return;
            }

            let curr = board[r][c]

            node = node.children[curr];

            //have we found a word?

            if(node.word != ""){
                res.push(node.word);
                node.word = ""
            }

            //backtracking
            board[r][c] = "*";

            //recursively call for the neighbor cells
            dfs(r + 1,c,node)
            dfs(r - 1,c,node)
            dfs(r,c + 1,node)
            dfs(r,c - 1,node)

            board[r][c] = curr;

        }

        for(let r = 0;r < board.length;r++){
            for(let c = 0;c < board[0].length;c++){

                if(trie.root.children[board[r][c]]){
                    dfs(r,c,trie.root)
                }
            }
        }

        return res;
    }

}
