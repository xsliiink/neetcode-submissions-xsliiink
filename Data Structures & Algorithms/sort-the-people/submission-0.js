class Solution {
    /**
     * @param {string[]} names
     * @param {number[]} heights
     * @return {string[]}
     */
    sortPeople(names, heights) {
        //use the map to set the heigts
        const people = []
        let i = 0;

        if(names.length !== heights.length) return []
        
        for(let i = 0;i < names.length;i++){
            people.push({height: heights[i],name: names[i]})
        }

        //now sort the names by values
        people.sort((a,b) => b.height - a.height);

        return people.map(p => p.name);
    }
}
