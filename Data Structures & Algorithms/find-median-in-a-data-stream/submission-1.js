class MedianFinder {
    constructor() {
        this.maxHeap = new MaxPriorityQueue();
        this.minHeap = new MinPriorityQueue();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        
        if(this.maxHeap.isEmpty() || num <= this.maxHeap.front()){
            this.maxHeap.enqueue(num);
        }else{
            this.minHeap.enqueue(num);
        }

        //balancing the heaps
        if(this.maxHeap.size() > this.minHeap.size() + 1){
            let moved = this.maxHeap.dequeue();
            this.minHeap.enqueue(moved);
        }else if(this.minHeap.size() > this.maxHeap.size()){
            let moved = this.minHeap.dequeue();
            this.maxHeap.enqueue(moved);
        }
        
    }

    /**
     * @return {number}
     */
    findMedian() {
        //if the heaps are balanced return the top of the maxHeap
        if(this.maxHeap.size() > this.minHeap.size()){
            return this.maxHeap.front();
        }else{
            let max = this.maxHeap.front();
            let min = this.minHeap.front();

            return (max + min)/2;
        }
    }
}
