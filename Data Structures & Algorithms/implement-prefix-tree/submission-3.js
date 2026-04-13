//create a node structure
class TrieNode{
    constructor(){
        this.children = {};
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

        //first always set the pointer to the root;
        let curr = this.root;

        //looping through the chars adding each one
        for(let char of word){
            if(!curr.children[char]){
                curr.children[char] = new TrieNode();
            }
            //movw the poiner
            curr = curr.children[char]
        }
        //set is the end of word to true
        curr.isEndOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {

        //set the pointer to the root
        let curr = this.root;

        //loop
        for(let char of word){
            if(!curr.children[char]){
                return false;
            }

            //move the pointer
            curr = curr.children[char]
        }

        //set the end to true
        return curr.isEndOfWord
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {

        //create a pointer to the root
        let curr = this.root

        //loop
        for(let char of prefix){
            if(!curr.children[char]){
                return false;
            }

            //move the pointer
            curr = curr.children[char]
        }
        //return true
        return true;
    }

}
