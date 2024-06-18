class Stack<T>  {
    private arr: Array<T>;
    private top: number;
    private size: number;

    constructor(size: number){
        this.size = size;
        this.top = -1;
        this.arr = new Array<T>(size);
    }

    push(item:T) {
        if(this.isFull()){
            console.log('stack is full');
            throw new Error('Stack is full');
        }
        this.top++;
        this.arr.push(item);
    }

    pop():T {
        if(this.isEmpty()){
            console.log('stack is empty');
            throw new Error('Stack is empty');        
        }

        let popResult = this.arr[this.top--];

        return popResult;

    }

    isEmpty(): boolean {
        return (this.top == -1);
    }

    isFull(): boolean {
        return (this.top+1 == this.size);
    }

    peek(): T | undefined {
        if(this.isEmpty()){
            console.log('stack is empty');
            throw new Error('Stack is empty');
        }

        let peekResult = this.arr[this.top];

        return peekResult;
    }



}