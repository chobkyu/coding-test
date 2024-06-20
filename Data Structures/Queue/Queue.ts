class Queue<T> {
    private arr: Array<T>;
    private first: number;
    private rear: number;
    private size: number;

    constructor(size: number){
        this.size = size;
        this.first = -1;
        this.rear = -1;
        this.arr = new Array<T>(size);
    }

    enqueue(item:T) {
        if(this.isFull()){
            console.log('queue is full');
            throw new Error('queue is full');
        }

        if (this.isEmpty()) {
            this.first = 0;
        }
        
        this.rear++;
        this.arr[this.rear] = item;
    }

    dequeue(): T {
        if(this.isEmpty()){
            console.log('queue is empty');
            throw new Error('queue is empty');
        }

        let dequeueResult = this.arr[this.first];

        if(this.first == this.rear){
            this.first = -1;
            this.rear = -1;
        }else{
            this.first++;
        }

        return dequeueResult;
    }

    isEmpty(): boolean {
        return (this.first == -1);
    }

    isFull(): boolean {
        return (this.size == this.rear+1);
    }

    peek(): T | undefined {
        if(this.isEmpty()){
            console.log('queue is empty');
            throw new Error('queue is empty');
        }

        let peekResult = this.arr[this.first];

        return peekResult;
    }
}