class TrieNode{
    constructor(){
        this.children = {};
        this.isEnd = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {

        let node = this.root;

        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode();
            }

            node = node.children[char]
        }

        node.isEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
       

       const dfs = (index,node) => {

            for(let i = index;i < word.length;i++){
                let char = word[i];

                if(char === "."){
                    //loop through all the children nodes
                    for(let childKey in node.children){
                        if(dfs(i + 1,node.children[childKey])){
                            return true;
                        }
                    }

                    return false;
                }else{
                    //regular char case
                    if(!node.children[char]){
                        return false
                    }

                    node = node.children[char]
                }
            }
            return node.isEnd;
       }

       return dfs(0,this.root)
    }
}
