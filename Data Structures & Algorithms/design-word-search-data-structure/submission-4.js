class TrieNode{
    constructor(){
        this.children = {};
        this.isEndOfWord = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }


    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {

        //create the root first
        let curr = this.root

        for(let char of word){
            if(!curr.children[char]){
                curr.children[char] = new TrieNode();
            }

            //move the pointer
            curr = curr.children[char]
        }
        //mark the end of the word
        curr.isEndOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        
        let curr = this.root;

        let dfs = (index,curr) => {

            if(index === word.length){
                return curr.isEndOfWord
            }
            
            //defining the curr char
            let char = word[index]

            //if we see a node loop through every char of that node
            if(char === '.'){
                for(const children of Object.values(curr.children)){
                    if(dfs(index + 1,children)) return true;
                }
            }else{//if we see a regular char
                if(!curr.children[char]) return false;

                return dfs(index + 1,curr.children[char]);
            }
            return false;
        }
    return dfs(0,this.root)
        
    }
}
