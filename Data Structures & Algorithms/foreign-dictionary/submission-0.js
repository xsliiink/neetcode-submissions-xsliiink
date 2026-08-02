class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {

        //intialize a map
        let adj = new Map();
        for(let word of words){
            for(let c of word){
                if(!adj.has(c)) adj.set(c,new Set());
            }
        }


        for(let i = 0;i < words.length - 1;i++){
            let w1 = words[i];
            let w2 = words[i + 1];

            let minLen = Math.min(w1.length,w2.length);

            //prerix check
            if(w1.length > w2.length && w1.slice(0, minLen) === w2.slice(0, minLen)) return ""

            for(let j = 0;j < minLen;j++){
                if(w1[j] !== w2[j]){
                    adj.get(w1[j]).add(w2[j]);
                    break;
                }
            }

           
        }

        const visit = new Map();
        const res = []

        const dfs = (char) => {

            //found a cycle
            if(visit.has(char)) return visit.get(char);

            visit.set(char,true);


            //found a cycle
            for(let neighbor of adj.get(char)){
                if(dfs(neighbor)) return true
            }

            visit.set(char,false);
            res.push(char);
        }

        for (let [char] of adj) {
            if (dfs(char)) return ""; 
        }

        return res.reverse().join("");
    }
}
