class MedianFinder {
    constructor() {
        // Создаем кучи
        this.minHeap = new MinPriorityQueue();
        this.maxHeap = new MaxPriorityQueue();
    }

    addNum(num) {
        // num <= вершины maxHeap (используем понятный знак <=)
        if (this.maxHeap.isEmpty() || num <= this.maxHeap.front()) {
            this.maxHeap.enqueue(num);
        } else {
            this.minHeap.enqueue(num);
        }

        // Балансировка (чистый dequeue без .element)
        if (this.minHeap.size() > this.maxHeap.size()) {
            let moved = this.minHeap.dequeue();
            this.maxHeap.enqueue(moved);
        } else if (this.maxHeap.size() > this.minHeap.size() + 1) {
            let moved = this.maxHeap.dequeue();
            this.minHeap.enqueue(moved);
        }
    }

    findMedian() {
        if (this.maxHeap.size() > this.minHeap.size()) {
            return this.maxHeap.front(); // Просто возвращаем число
        } else {
            let maxTop = this.maxHeap.front(); // Просто число
            let minTop = this.minHeap.front(); // Просто число
            return (maxTop + minTop) / 2;
        }
    }
}