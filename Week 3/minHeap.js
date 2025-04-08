class MinHeap {
    constructor() {
        this.heap = [];
    }
    getParentIndex (i) {
        return Math.floor((i - 1 )/ 2);
    }
    getLeftChildIndex(i){
        return 2 * i + 1;
    }
    getRightChildIndex(i){
        return 2* i + 2;
    }

    // Swap Two Elements
    swap(i, j){
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    
    // Insert a value 
    insert(val){
        this.heap.push(val);
        this.heapifyUp();
    }

    heapifyUp(){
        let index  = this.heap.length -1;
        while(index > 0 && this.heap[this.getParentIndex(index)] > this.heap[index]){
            this.swap(index, this.getParentIndex(index));
            index = this.getParentIndex(index);
        }
    }
    // heapifyUp by own logic

    /**
     *  
     *
     */




    //  Remove the smallest elem ;
    extractMin(){
        if(this.heap.length === 0) return null
        if(this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min
    }

    // HeapifyDown
    heapifyDown(){
        let index = 0;
        const length = this.heap.length;

        while(this.getLeftChildIndex(index) < length){
            let smallerChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);

            if(rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallerChildIndex]){
                smallerChildIndex =rightChildIndex;
            }
            if(this.heap[index] <= this.heap[smallerChildIndex]) break;
            
            this.swap(index, smallerChildIndex);
            index = smallerChildIndex;
        }
    }


    peak(){
        return this.heap.length > 0 ? this.heap[0]: null ;
    }
    print(){
        console.log(this.heap);
    }
}

const heap = new MinHeap();
heap.insert(10);
heap.insert(5);
heap.insert(3);
heap.insert(2);

heap.insert(8);
heap.insert(4);
heap.print();
heap.extractMin();
heap.print();
console.log(heap.peak())



function heapifyUp(){
    let index = this.heap.length- 1

    while(index > 0 && this.heap[getParentIndex(index)] > this.heap(index)) {
        this.swap(this.getParentIndex(), index);
        index = this.getParentIndex();
    }
}



// 
function removeRoot(){
    if(this.heap.length === 0) return null;
    if(this.heap.length === 1) return this.heap.pop();
    this.heap.heapifyDown()
}


function heapifyDown(){
    let index = 0;
    const length = this.heap.length;

    while(getLeftChildIndex(index)< length){
        let smallerChildIndex = this.getLeftChildIndex(index);
        const rightChildIndex = this.getRightChildIndex(index);

        if(rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallerChildInde]){
            smallerChildIndex = rightChildIndex;
        } 
        if(this.heap[index] <= this.heap[smallerChildIndex])break;
        this.swap(index, smallerChildIndex);
        index = smallerChildIndex;
    }
}


class MaxHeap {
    constructor(){
        this.heap =[];
    }

    getParentIndex(i){
        return Math.floor((i - 1) / 2)
    }
    getLeft(i) { return 2 * i + 1}
    getRight(i) {return  2 * i + 2};

    insert(val){
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1)
    }
    bubbleUp(index){
        while(index > 0){
            const parent = this.getParentIndex(index);
            if(this.heap[parent] < this.heap[index]){
                this.swap(index, parent);
                index = this.getParentIndex(index);
            }else {
                break;
            }
        }
    }
    swap(i, j){
        [this.heap[i],this.heap[j]] = [this.heap[j] ,this.heap[i]]
    }

    deleteMax(){
        if(this.heap.length === 0) return null;
        if(this.heap.length === 1) return this.heap.pop();


        const max = this.heap[0];
        this.heap[0] = this.heap.pop()
        this.bubbleDown(0)
        return max
    }

    bubbleDown(index){
        let largest =index;
        const left = this.getLeft(index);
        const right = this.getRight(index);

        if(left < this.heap.length && this.heap[left] > this.heap[largest]) largest = left;
        if(right < this.heap.length && this.heap[right] > this.heap[largest]) largest = right;

        if(largest !== index){
            this.swap(largest, index);
            this.bubbleDown(largest);
        }
    }
    traverse(){
        return [...this.heap];
    }
}




const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(5);
maxHeap.insert(14);
maxHeap.insert(2);
console.log('MaxHeap:', maxHeap.traverse());
console.log('Delete Max:', maxHeap.deleteMax());
console.log('MaxHeap after delete:', maxHeap.traverse());





// heap sort 

function heapSort(arr = []) {
    let n = arr.length;

}

function heapify(arr, heapSize, index){
    let largest = index ;
    let left = 2 * index + 1;
    let right = 2 * index + 2;

    if(left < heapSize && arr[largest] < arr[left]) largest = left;
    if(right < heapSize && arr[largest] < arr[right]) largest = right;
    if(largest != index){
        [arr[index], arr[largest]] = [arr[largest], arr[index]]
        heapify(arr, heapSize, largest);
    }
}