class TrieNode{
    constructor(){
        this.isEndOfWord = false;
        this.children = {}
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
         //create a root first
        let curr = this.root;

        for(let char of word){
            if(!curr.children[char]){

                curr.children[char] = new TrieNode()
            }

            //move the pointer
            curr = curr.children[char];
        }
        //mark the end of the word
        curr.isEndOfWord = true;
        
    }


    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        

        //create a pointer to the root
        let curr = this.root;

        //now we need to implement a dfs function

        const dfs = (index,curr) => {

            //base case where we have reached the end of the word
            if(index === word.length){
                return curr.isEndOfWord;
            }

            //defining a char
            let char = word[index]

            //if we see a dot loop through every child of that node
            if(char == '.'){
                for(const children of Object.values(curr.children)){
                    //if we found a solution return true
                    if(dfs(index + 1,children)) return true;
                }
            }
            //if we see a reg char
            else{
                if(!curr.children[char]) return false;

                return dfs(index + 1,curr.children[char]);
            }
            return false;
        }   

        return dfs(0,this.root)
    }
}