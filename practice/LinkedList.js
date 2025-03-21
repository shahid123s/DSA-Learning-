// create a linked list singly list

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null;
        this.size = 0;
    }

    addFirst(value) {
        const newNode = new Node(value);
        this.size++;
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
    }

    addLast(value) {
        const newNode = new Node(value);
        this.size++;
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        let curr = this.head;
        while(curr.next){
            curr = curr.next;
        }   

        curr.next = newNode;
        this.tail = newNode;
    }

    addAtIndex(value, index){
        if(this.size < index){
            console.log('Invalid Index');
            return 'Invalid Index';
        } 
            
        const newNode = new Node(value);
        if(index === 0){
            newNode.next = this.head;
            this.head =newNode;
            this.size++;
            return
        }
        let curr = this.head;
        let position = 0
        while(curr && position < index -1){
            curr = curr.next;
            position++;
        }
        newNode.next = curr.next;
        curr.next = newNode;
        this.size++;
    }

    deleteAt(index) {
        if(index > this.size - 1) {
            console.log('Invalid index')
            return
        }
        if(index === 0){
            this.head = this.head.next;
            this.size--;
            return
        };
        let i = 0;
        let curr = this.head;
        let prev = null;
        while(curr && i < index){
            prev = curr;
            curr = curr.next;
            i++
        }
        prev.next = curr.next;

        if(index === this.size - 1) this.tail = prev;
        this.size--;
    }

    insertAfterNode(node, value){
        const newNode = new Node(value);
        if(this.head.value === node){
            newNode.next = this.head;
            this.head = newNode;
            this.size++;
            return
        }
        let curr = this.head;
        
        while(curr){
            if(curr.value === node){
                newNode.next = curr.next;
                curr.next = newNode;
                this.size++;
                if(!newNode.next){
                    this.tail = newNode;
                }
                return
            }
            curr = curr.next;
        }
        console.log('No node find')
        return 
    }

    print(){
        let curr = this.head;
        const arr = []
        while(curr){
            arr.push(curr.value)
            curr = curr.next
        }

        return arr;
    }

    printListFunction(){
        return {
            head: this.head,
            tail: this.tail,
            size : this.size
        }
    }
}


const list = new SinglyLinkedList();
list.addFirst(1);
list.addFirst(0);
list.addLast(2);
list.addAtIndex(3, 3)
console.log
// list.deleteAt(0)
list.insertAfterNode(3, 4)
console.log(list.print());
// console.log(list.printListFunction().size)
// console.log(list.printListFunction().head)