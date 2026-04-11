class TrieNode{
    constructor(){
        this.isEndOfWord = false;
        this.children = {}
    }
}

class WordDictionary {
    constructor() {
        this.node = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {

        //create a root first
        let curr = this.node;

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

        //create the root
        let curr = this.node

         const dfs = (index,curr) => {
            //base case we have reached the end of the word
            if(index == word.length){
                return curr.isEndOfWord;
            }

            const char = word[index]

            //the '.' case
            if (char === '.'){
                //looping through every child
                for(const child of Object.values(curr.children)){
                    //if even one has reached the end return true
                    if(dfs(index + 1,child)) return true;
                }

                //if we haven't found any return false
                return false;
            }else{
                //regular char
                if (!curr.children[char]) return false;
                return dfs(index + 1, curr.children[char]);
            }
        }

        return dfs(0,this.node)
    }
}
