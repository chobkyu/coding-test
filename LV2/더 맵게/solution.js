function solution(scoville, K) {
    var answer = 0;
    const heap = new MinHeap();
    scoville.forEach(el => heap.heappush(el));
    
    while(heap.heap[0]<K && heap.size()>1){
        answer++;
        heap.heappush(heap.heappop()+heap.heappop()*2);
    }
    
    return heap.heap[0]>=K ? answer : -1;
}

const getScoville = (a,b) => {
    if(b>a)return a+(b*2)
    else return b+(a*2)
}

class MinHeap{
    constructor(){
        this.heap = []
    }
    
    size(){
        return this.heap.length;
    }
    
    swap(idx1, idx2){
        [this.heap[idx1],this.heap[idx2]] = [this.heap[idx2],this.heap[idx1]]
        return this.heap;
    }
    
    getParentIdx(childIdx){
        return Math.floor((childIdx-1)/2)
    }
    
    getLeftChildIdx(parentIdx){
        return parentIdx*2+1;
    }
    
    getRightChildIdx(parentIdx){
        return parentIdx*2+2;
    }
    
    heappop(){
        const heapSize = this.size();
        if(!heapSize) return null;
        if(heapSize ===1) return this.heap.pop()
        
        const value = this.heap[0];
        
        this.heap[0] = this.heap.pop();
        this.bubbledown();
        return value;//minheap이므로 제일 작은 값 pop
    }
    
    heappush(value){
        this.heap.push(value);//새로운 값 삽입
        this.bubbleup();
        
        return this.heap
    }
    
    bubbleup(){
        let child = this.size()-1;  //방금 넣은 값
        let parent = this.getParentIdx(child);
        
        while(this.heap[child]<this.heap[parent]){
            //minheap
            this.swap(child,parent);
            child = parent; //원래 부모 노드 idx를 child에 저장(방금 넣은 값)
            parent = this.getParentIdx(parent) //그 위 부모 노드 idx
        }
        
    }
    
    bubbledown(){
        let parent = 0;
        let leftChild = this.getLeftChildIdx(parent);
        let rightChild = this.getRightChildIdx(parent);
        
        while((leftChild <= this.size()-1 && this.heap[leftChild]<this.heap[parent]) || (rightChild <= this.size()-1 && this.heap[rightChild] <this.heap[parent])){
            //왼쪽 자식이 부모 노드보다 작고 마지막 값이 아닐 때 || 오른쪽 자식이 부모노드보다 작고 마지막 값이 아닐때
            if(rightChild <= this.size()-1 && this.heap[leftChild]>this.heap[rightChild]){
                //오른쪽 자식이 마지막 값이 아니고 왼쪽 자식보다 작을 때
                this.swap(parent, rightChild);
                parent = rightChild;
            }else{
                //왼쪽 자식이 오른쪽 자식보다 작을 때
                this.swap(parent,leftChild);
                parent = leftChild;
            }
            //이렇게 되면 부모노드 자리로 올라간 노드의 idx가 parent에 저장
            leftChild = this.getLeftChildIdx(parent)
            rightChild = this.getRightChildIdx(parent)
        }
    }
}


//https://school.programmers.co.kr/learn/courses/30/lessons/42626