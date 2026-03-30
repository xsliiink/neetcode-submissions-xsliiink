/*
Definition for a Node.
class Node {
    public int val;
    public List<Node> neighbors;
    public Node() {
        val = 0;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val) {
        val = _val;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val, ArrayList<Node> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
}
*/

class Solution {
    public Node cloneGraph(Node node) {
        if (node == null) return null;

        HashMap map = new HashMap();
        map.put(node,new Node(node.val));

        Queue queue = new ArrayDeque();
        queue.offer(node);

        while(!queue.isEmpty()){
            //getting the current node
            Node current = (Node) queue.poll();

            for(Object neighborObj : current.neighbors){
                Node neighbor = (Node) neighborObj;

                if(!map.containsKey(neighbor)){
                    map.put(neighbor,new Node(neighbor.val));
                    queue.offer(neighbor);
                }
                
                Node currentClone = (Node)map.get(current);
                Node neighborClone = (Node)map.get(neighbor);
                currentClone.neighbors.add(neighborClone);

            }
        }

        return (Node) map.get(node);
    }
}