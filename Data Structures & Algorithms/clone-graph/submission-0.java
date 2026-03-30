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

    //running through the nodes
     while (!queue.isEmpty()){
        //taking the current node
        Node current = (Node) queue.poll();

        //running through all the neighbors
        for(Object neighborObj : current.neighbors){
            Node neighbor = (Node) neighborObj;

            if(!map.containsKey(neighbor)){
                //creating a clone
                map.put(neighbor,new Node(neighbor.val));

                //adding the neighnor to the queue
                queue.offer(neighbor);
            }

            //creating a connection between curr and neigbor adding neigbor as neigbor of curr
            Node currClone = (Node) map.get(current);
            Node neighborClone = (Node) map.get(neighbor);
            currClone.neighbors.add(neighborClone);
        }
     }
    return (Node) map.get(node);
    }
}