class Graph {
    constructor() {
        this.adjList = {}
    }

    addVertex(vertex) {
        if (!this.adjList[vertex]) {
            this.adjList[vertex] = [];
        }
    }
    addEdge(vertex1, vertex2) {
        if (!this.adjList[vertex1] || !this.adjList[vertex2]) {
            return `There no vertex found ${!this.adjList[vertex1] ? vertex1 : vertex2}`
        }
        this.adjList[vertex1].push(vertex2) // when before adding check the duplicate is there or not for optimization 
        this.adjList[vertex2].push(vertex1)
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjList[vertex1] && this.adjList[vertex2]) {

            this.adjList[vertex1] = this.adjList[vertex1].filter(v => v != vertex2)
            this.adjList[vertex2] = this.adjList[vertex2].filter(v => v != vertex1)
            return
        }
        return 'One the vertex is not in the graph';
    }

    removeVertex(vertex1) {
        if (!this.adjList[vertex1]) return 'Vertex is not found';

        for (let neighbor of this.adjList[vertex1]) {
            this.removeEdge(neighbor, vertex1);
        }
        delete this.adjList[vertex1];
    }

    findTheShortestDis(vertex1, vertex2) {
        let queue = [vertex1];
        let visited = new Set(vertex1);
        let distance = { [vertex1]: 0 };

        while (queue.length) {
            let node = queue.shift()

            for (let neighbor of this.adjList[node]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    distance[neighbor] = distance[node] + 1;
                    queue.push(neighbor);

                    if (neighbor === vertex2) {
                        return distance[neighbor];
                    }
                }
            }
        }
        return -1;
    }

    bfs(start) {
        let queue = [start];
        let visited = new Set();
        let result = [];

        visited.add(start);

        while (queue.length) {
            let node = queue.shift();
            result.push(node);

            for (let neighbor of this.adjList[node]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }

    dfs(start) {
        let stack = [start];
        let result = [];
        let visited = new Set();

        while (stack.length) {
            let node = stack.pop();
            visited.add(node);
            result.push(node);
            for (let neighbor of this.adjList[node]) {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            }
        }
        return result;
    }

}


const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("C", "D");
g.addEdge("D", "E");


console.log(g.findTheShortestDis('A', 'E'))





// NOW HEAP 


// Min Heap


class Minheap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }
    getLeftIndex(i) {
        return 2 * i + 1;
    }
    getRightIndex(i) {
        return 2 * i + 2;
    }

    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }
    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0 && this.heap[this.getParentIndex(index)] > this.heap[index]) {
            this.swap(index, this.getParentIndex(index));
            index = this.getParentIndex(index);
        }
    }
    extractMin() {
        if (this.heap.length === 0) return null
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop()
        this.bubbleDown()
        return min;
    }

    bubbleDown() {
        let index = 0;
        const lenght = this.heap.length
        while (this.getLeftIndex(index) < lenght) {
            let smallIndex = this.getLeftIndex(index);
            const rightIndex = this.getRightIndex(index);

            if (rightIndex < lenght && this.heap[rightIndex] < this.heap[smallIndex]) {
                smallIndex = rightIndex
            }
            if (this.heap[index] <= this.heap[smallIndex]) break;
            this.swap(index, smallIndex);
            index = smallIndex
        }
    }
    peek() {
        return this.heap[0];
    }
    print() {
        console.log(this.heap);
    }
    size() {
        return this.heap.length;
    }
}



const heap = new Minheap()
heap.insert(10);
heap.insert(5);
heap.insert(3);
heap.insert(2);

heap.insert(8);
heap.insert(4);
heap.print()


function findKthLargestElement(arr) {
    const minHeap = new Minheap();

    for (let num of arr) {
        minHeap.insert(num);
        if (minHeap.size() > k) {
            minHeap.extractMin();
        }
    }
    return minHeap.peek()
}


function heapSort(arr = []) {
    let n = arr.length;

    for (i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    for (let i = n - 1; i >= 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }

    return arr;
}

function heapify(arr, heapSize, index) {
    let largest = index
    let left = 2 * index + 1;
    let right = 2 * index + 2;

    if (left < heapSize && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < heapSize && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest != index) {
        [arr[index], arr[largest]] = [arr[largest], arr[index]];
        heapify(arr, heapSize, largest)
    }
}



const arr = [2, 4, 14, 11, 2, 1, 44, 55, 5663, 12, 121]

console.log(heapSort(arr));




// Trie

class TrieNode {
    constructor() {
        this.children = {}
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root
        for (let char of word) {
            if (!node.children[char]) node.children[char] = new TrieNode();
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    autoCompletion(word) {
        let node = this.root;
        let result = [];
        for (let char of word) {
            if (!node.children[char]) return result;
            node = node.children[char];
        }

        function dfs(node, path) {
            if (node.isEndOfWord) {
                result.push(path);
            }

            for (let char in node.children) {
                dfs(node.children[char], path + char);
            }
        }
        dfs(node, word);
        return result;
    }
}



class BTNode {
    constructor(val) {
        this.val = val;
        this.left = null
        this.right = null
    }
}


class BT {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new BTNode(val)
        if (!this.root) {
            this.root = newNode
            return;
        }

        let queue = [this.root];
        while (queue.length) {
            let curr = queue.shift();
            if (!curr.left) return curr.left = newNode;
            if (!curr.right) return curr.right = newNode;
            if (curr.left) queue.push(curr.left)
            if (curr.right) queue.push(curr.right);
        }
    }

    inOrderTraversal(node = this.root) {
        if (!node) return [];
        return [
            ...this.inOrderTraversal(node.left),
            node.val,
            ...this.inOrderTraversal(node.right)
        ]
    }

    levelOrder(node = this.root) {
        let queue = [node];
        let result = [];
        while (queue.length) {
            let curr = queue.shift()
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
            result.push(curr.val);
        }
        return result
    }
}


// BST


class BST {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }

    insert(val) {
        if (this.val > val) {
            if (!this.left) this.left = new BST(val)
            else this.left.insert(val);
        } else {
            if (!this.right) this.right = new BST(val);
            else this.right.insert(val);
        }
    }

    delete(val, parent) {
        if (this.val > val) {
            if (this.left) this.left.delete(val, this);
        } else if (this.val < val) {
            if (this.right) this.right.delete(val, this);
        } else {
            if(!this.left && !this.right){
                if(parent) {
                    if(parent.left === this) parent.left =null
                    else parent.right = null;
                }
            }
            else if(!this.left){
                if(parent){
                    if(parent.left === this) parent.left = this.right;
                    else parent.right = this.right;
                }

            } else if(!this.right){
                if(parent){
                    if(parent.left === this) parent.left = this.left;
                    else parent.right = this.left;;
                }
            } else {
                let minRight = this.right.getMinVal();
                this.val = minRight;
                this.right.delete(minRight, this)
            }
        }
    }

    getMinVal() {
        return this.left ? this.left.getMinVal() : this.val;
    }

    
}








function autoCompletion (prefix) {
    let node = this.root;
    let word = []

    for(let char of prefix){
        if(!node.children[char]) return words
        node = node.children[char];
    }

    function dfs(node, path) {
        if(node.isEndOfWord){
            word.push(path);
        }
        for(let char in node.children){
            dfs(node.children[char], path + char);
        }
    }
    dfs(node, prefix);
    return word
}



function cloneGraph( node) {
    if(!node) return null;
    let visited = new Map();

    function dfs(node){
        if(visited.has(node)) return visited.get(node);
        
        let clone = new Node(node.val);
        visited.set(node, clone);
        for(let neighbor of node.neighbor){
            clone.nerigbour.push(dfs(neighbor))
        }

        return clone
    }

    return dfs(node);
}





function sortHeap(arr){
    let n = arr.lenght;


}


const bubbleDown = (arr, size, i) => {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if(left < size &&  arr[left] > arr[largest]) largest = left
    if(right < size &&  arr[right] > arr[largest]) largest = right

    if(largest != i){
        [arr[largest], arr[i]] = [ arr[i], arr[largest]]
        bubbleDown(arr, size, largest);
    }
}


// bubbleUp(){
//     let index = this.heap.lenght - 1;
//     let parent = this.getParentIndex(index);
//     while(index > 0 && this.heap[parent] < this.heap[index]){
//         swap()
//         index= parent;
//     }
// } 

// let index = 0;
// let length = this.heap.lenght;
// let left = this.getLeftIndex(index);
// while(left < length) {

//     const right = this.getRightIndex(index);

//     if(right< length && arr[right] > )
// }