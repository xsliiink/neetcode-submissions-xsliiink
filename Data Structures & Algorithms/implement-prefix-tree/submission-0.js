//the strucutre of one node
class TrieNode{
    constructor(){

        this.children = {};
        this.isEndOfWord= false;
    }
}

//the structure of a tree
class PrefixTree {
    constructor() {
         this.root = new TrieNode();
         
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        //creating a root for it all
        let curr = this.root;

        for (let char of word){
            if(!curr.children[char]){
                curr.children[char] = new TrieNode()
            }

            //jumping into the next node
            curr = curr.children[char]
        }
        curr.isEndOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.root

        for(let char of word){
            if(!curr.children[char]){
                return false;
            }

            //moving the pointer to the next node
            curr = curr.children[char]
        }

        //checking if it is a whole word
        return curr.isEndOfWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this.root;

        for(let char of prefix){
            if(!curr.children[char]){
                return false;
            }
            curr = curr.children[char];
        }
        return true;
    }
}
