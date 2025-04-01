// /**
//  * A stack is a fundamental data structure in computer science that follows the Last In, First Out (LIFO) principle. 
//  * This means that the last element added to the stack will be the first one to be removed. 
//  * Stacks are widely used in various applications, such as function call management, undo mechanisms, and parsing expressions.
//  * A stack is a linear data structure that allows operations to be performed at one end, called the top. The two primary operations are:
//  * Push: Adds an element to the top of the stack.
//  * Pop: Removes and returns the top element from the stack.
//  * 
//  * 
//  * Stack Underflow:
//  * Occurs when you try to perform a pop or peek operation on an empty stack.
// *
//  *
//  * Stack Overflow:
//  * Occurs when you try to push an element onto a full stack.
//  * Handling: Check if the stack has reached its maximum capacity before pushing.
//  *
//  * Applications:
//  * 1. Function Call Management: Stacks are used to manage function calls in programming languages. Each function call is pushed onto the stack, and when a function returns, it is popped off the stack.
//  * 2. Undo Mechanisms: Stacks can be used to implement undo functionality in applications. Each state change is pushed onto the stack, and when the user wants to undo, the last state is popped off.
//  * 3. Expression Parsing: Stacks are used to parse and evaluate expressions. The operators and operands are pushed and popped from the stack as the expression is evaluated.
//  * 4. Backtracking: Stacks are used in backtracking algorithms to explore all possible solutions. Each choice is pushed onto the stack, and when a solution is found or a dead-end is reached, it is popped off.
//  * 5. Recursion: Stacks are used in recursive algorithms. Each recursive call is pushed onto the stack, and when the base case is reached, it is popped off.Handling: Check if the stack is empty before performing these operations.
//  * 
//  * Push: Adds an element to the top of the stack.
//  * Pop: Removes and returns the top element from the stack.
//  * Peek (or Top): Returns the top element without removing it
//  * isEmpty: Checks if the stack is empty.
//  * Size: Returns the number of elements in the stack.

//  */


// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     push(element) {
//         this.items.push(element);
//     }

//     pop() {
//         if (this.isEmpty()) {
//             return "Underflow";
//         }
//         return this.items.pop();
//     }

//     peek() {
//         return this.items[this.items.length - 1];
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }

//     size() {
//         return this.items.length;
//     }

//     print() {
//         return this.items.toString();
//     }

// }

// let stack = new Stack();
// stack.push(10);
// stack.push(1);
// stack.push(12);
// stack.push(13);
// stack.push(14);
// stack.push(15);
// console.log(stack.peek())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.print())






class Stack {
    constructor(){
        this.items = [];
    }

    push(ele){
        this.items.push(ele);
    }

    pop(){
        if(this.isEmpty()) return "Stack is empty";
        return this.items.pop()
    }
    peek(){
        if(this.isEmpty()) return "Stack is empty";
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size(){
        return this.items.length;
    }
    deleteMiddle(){
        let mid = Math.floor(this.size()/ 2);
        return this.deleteMiddleHelper(mid)
    }

    deleteMiddleHelper(index){
        if(index === 0){
           return  this.pop()
        }
        let temp = this.pop();
        this.deleteMiddleHelper(index-1);
        return this.push(temp);
    }

    print(){
        console.log(this.items);
    }
}

let newStack = new Stack();
console.log(newStack.isEmpty())
newStack.push(1)
newStack.push(2)
newStack.push(3)
newStack.push(13)
newStack.pop();
// console.log(newStack.peek())
// console.log(newStack.push())

// newStack.print();





let fu = () => {
    console.log('hello')
}
let fu2 = () => {
    console.log('hello2')
}
let fu1 = () => {
    console.log('hello1')
}


// let arr = [fu, fu2, fu1];

// for(let i =0 ; i< arr.length; i++){
//     arr[i]()
// }




// Linked list implementation of stack 

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
               }
}


class LinkedListStack {
    constructor(){
        this.top = null;
        this.size = 0;
    }

    push(val){
        const newNode = new Node(val);
        newNode.next = this.top;
        this.top = newNode;
        this.size ++;
    }
    pop(){
        if(this.isEmpty()) return "Stack is Empty";
        let out = this.top;
        this.top = this.top.next;
        this.size--;
        return out;
    }
    peek(){
        if(this.isEmpty()) return 'Stack is Empty';
        return this.top;
    }
    isEmpty(){
        return this.size === 0;
    }

    
    print(){
        let curr = this.top;
        let stack = [];
        while(curr){
            stack.push(curr.val);
            curr = curr.next;
        }
        return `${stack} This is from <-`
    }
}


let ListStack = new LinkedListStack();
// ListStack.isEmpty()
console.log(ListStack.peek()) 

// Reverse the string order by its word 
// Hello world --> word Hello 


function reverWord(str) {
    let arr = str.split(' ');
    let stack = []
    for(let i = 0; i < arr.length; i++){
        stack.push(arr[i]);
    }
    let out = ''
    while(stack.length){
        let curr = stack.pop();
        out = out ? `${out} ${curr}`: curr; 
    }
    return out    
}
console.log(reverWord('hello world'))



// Delete the middle element in the stack 


