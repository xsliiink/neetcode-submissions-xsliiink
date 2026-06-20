class TrieNode{
    constructor(){
        this.children = {};
        this.isWord = false;
        this.word = ""
    }
}

class Node{
    constructor(){
        this.root = new TrieNode();
    }

    insert(word){
        
        let node = this.root;

        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode();
            }
            node = node.children[char]
        }

        //mark the word
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
        let rows = board.length;
        let cols = board[0].length;
        let res = [];

        const trie = new Node();

        //populate the Trie with chars
        for(let word of words){
            trie.insert(word);
        }
        
        const dfs = (r,c,node) => {
            
            //base case
            if(r >= rows || c >= cols || r < 0 || c < 0 || !node.children[board[r][c]]){
                return;
            }

            let curr = board[r][c];

            //recursice step into the tree
            node = node.children[curr];

            if(node.word != ""){
                res.push(node.word);
                node.word = ""
            }

            board[r][c] = "*"

            dfs(r,c + 1,node);
            dfs(r - 1,c,node);
            dfs(r + 1,c,node);
            dfs(r,c - 1,node);

            board[r][c] = curr;
        }

        for(let r = 0;r < rows;r++){
            for(let c = 0; c < cols;c++){
                if(trie.root.children[board[r][c]]){
                    dfs(r,c,trie.root);
                }
            }
        }

        return res;
    }
}
