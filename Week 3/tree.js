
// What is tree ? 
/**
 * Tree is a hierarchal data structure that consists of node connected edges 
 * it is a non - lenear DS meaning it doesnt not store data sequently like array or linked list
 */

// Key concepts of Trees 

/**
 * Node - Each ele in a tree called node
 * Root Node - the topmost node in tree
 * Parent and Child Node - A node that has a child nodes is called parent, and the connected node below it are children or child
 * Sibling Node - Nodes that shares the same parent 
 * Leaf Node - a node with no children
 * Depth - The distance from the root node to a specific node
 * Height - The distance from a node to the deepsest leaf node
 * Subtree - A smaller tree withn a tree
 */


// Types of Trees

/**
 * Binary Tree: Each node has at most two children.
 * Binary Search Tree (BST): A binary tree where the left child is smaller than the parent, and the right child is greater.
 * Balanced Tree: A tree where the height difference between left and right subtrees is minimal.
 * AVL Tree: A self-balancing binary search tree.
 * Trie: A prefix tree used for storing strings efficiently.
 * Heap: A tree-based data structure used for priority queues.
 */



// Binary tree implementation


class Node {
    constructor (val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BinaryTree {
    constructor(){
        this.root = null;
    }

    insert(val) {
        const newNode = new Node(val);
        if(!this.root){
            this.root = newNode;
            return;
        }
        let queue = [this.root];
        while(queue.length){
            let current = queue.shift();
            if(!current.left){
                // console.log(val, 'left')
                current.left = newNode;
                return;
            } else {
                queue.push(current.left);
            }
            if(!current.right){
                current.right = newNode;
                // console.log(val, 'right')
                return ;
            } else {
                queue.push(current.left);
            }
        }
    }

    inOrderTraversal(node = this.root){
        if(node){
            this.inOrderTraversal(node.left);
            console.log(node.val);
            this.inOrderTraversal(node.right)
        }
    }

    levelorderTraversal(node = this.root){
        if(!node) return;
        let queue = [node];
        while(queue.length){
            let current = queue.shift();
            console.log(current.val);
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
    }

    levelOrderTraversal(node = this.root) {
        if(!node) return [];
        let queue = [node];
        let result = [];
        while(queue.length){
            let current = queue.shift();
            result.push(current.val);
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
        return result;
    }
    
}

const tree = new BinaryTree();
tree.insert(10)
tree.insert(20)
tree.insert(30)
tree.insert(40)
tree.insert(50);
tree.insert(60);
tree.insert(70);

// tree.inOrderTraversal()
// tree.levelorderTraversal()
console.log(tree.levelOrderTraversal())





/** 
 * In Binary tree a node always has its two children left and right 
 * The left and right children of any node can be another node or null;
 */

// In postorder traversal of binary tree is traversing the root in the following manner 
// first root then root's left then root's right 
// then root's left  left and right and the root's right left and right and so on  

// om {post order taraversal image is given} 
// the output of the binary tree is like 
//4 5 2 1 6 7 3


// Post order implementation using recursion method 





// DFS // DFS is a traversing method that goes deep into the tree before backtracking

//-- in DFS there ar e three methods
// 1. Preorder Traversal  (Root -> Left -> Right)
    function preOrderTraversal(node){
        if(!node) return[]; 
        return [
            node.val,
            ...preOrderTraversal(node.left),
            ...preOrderTraversal(node.right)
        ]
    }

// 2. Inorder Traversal (Left -> Root -> Right)
function inOrderTraversal(node) {
    if(!node) return [];
    return[
        ...inOrderTraversal(node.left),
        node.val,
        ...inOrderTraversal(node.right) 
    ]
}
// 3. Postorder Traversal (Left -> Right -> Root)

function postOrderTraversal(node){
    if(!node) return [];
    return [
        ...postOrderTraversal(node.left),
        ...postOrderTraversal(node.right),
        node.val
    ]
}

// BFS // BFS is a traversing method that goes level by level 
// It uses a queue to keep track of the nodes to be visited [FIFO Structure]

//-- in BFS there are two methods
// 1. Level Order Traversal (Level by Level)
function levelOrderTraversal(node) {
    if(!node) return [];
    let queue = [node];
    let result = [];
    while(queue.length){
        let current = queue.shift();
        result.push(current.val);
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
    }
    return result;
}


// function llevel (node){
//     if(!node) return [];
//     let queue = [node],
//         result = [];
//         while(queue.length){
//             let curr = queue.shift()
//             result.push(curr.val);  
//         }
// }



// 2. Zigzag Level Order Traversal (Alternating Left and Right)
function zigzagLevelOrderTraversal(node) {
    if(!node) return [];
    let queue = [node];
    let result = [];
    let leftToRight = true;
    while(queue.length){
        let levelSize = queue.length;
        let currentLevel = [];
        for(let i = 0; i < levelSize; i++){
            let current = queue.shift();
            if(leftToRight){
                currentLevel.push(current.val);
            } else {
                currentLevel.unshift(current.val);
            }
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
        result.push(currentLevel);
        leftToRight = !leftToRight;
    }
    return result;
}