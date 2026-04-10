class TrieNode {
    constructor(){
        //creating a structure of a single node
        this.children = {}
        this.isEndOfWord = false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {

        //start with the root
        let curr = this.root;

        //loop through the chars of the word
        for(let char of word){
            if(!curr.children[char]){
                curr.children[char] = new TrieNode();
                
            }

            //step
            curr = curr.children[char]
        }

        //setting the end of the word to true
        curr.isEndOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        //start with the root
        let curr = this.root

        //loop through the word
        for(let char of word){
            if(!curr.children[char]){
                return false;
            }

            //step - jumping into created node
            curr = curr.children[char]
        }
        return curr.isEndOfWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {

        //start with the root
        let curr = this.root

        //loop through the word
        for(let char of prefix){
            if(!curr.children[char]){
                return false;
            }
            //step
            curr = curr.children[char]
        }
        return true;
    }
}
