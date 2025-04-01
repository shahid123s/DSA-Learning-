function myCircularQueue(size) {
    this.queue = [];
    this.size = size;
}

myCircularQueue.prototype.enqueue = function(val){
    if(this.size === this.queue.length){
        return 'Queue is full'
    }
    this.queue.push(val)
}
myCircularQueue.prototype.dequeue = function(){
    if(this.queue.length === 0){
        return "Nothing to take"
    }
    returnthis.queue.shift();
}

myCircularQueue.prototype.Front = function(){
    if(this.queue.length === 0){
        return -1
    }
    return this.queue[0];

}

myCircularQueue.prototype.Rear = function(){
    if(this.queue.length === 0){
        return -1;
    }
    return this.queue[this.queue.length - 1]
}

let obj = new myCircularQueue(5);
console.log(obj.enqueue(5))
console.log(obj.enqueue(1))
console.log(obj.enqueue(2))
console.log(obj.Rear())
console.log(obj.enqueue(3))
console.log(obj.enqueue(4))
console.log(obj.Front())
console.log(obj.enqueue(6))
console.log(obj.Rear())
                                                                                                                                                                            