// // Node class representing each node in the binary tree
// class TreeNode {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
//   }
  
//   // Binary Tree class with insert and in-order traversal methods
//   class BinaryTree {
//     constructor() {
//       this.root = null;
//     }
  
//     // Insert a value into the tree
//     insert(value) {
//       const newNode = new TreeNode(value);
  
//       if (this.root === null) {
//         this.root = newNode;
//       } else {
//         this._insertNode(this.root, newNode);
//       }
//     }
  
//     _insertNode(node, newNode) {
//       if (newNode.value < node.value) {
//         if (node.left === null) {
//           node.left = newNode;
//         } else {
//           this._insertNode(node.left, newNode);
//         }
//       } else {
//         if (node.right === null) {
//           node.right = newNode;
//         } else {
//           this._insertNode(node.right, newNode);
//         }
//       }
//     }
  
//     // In-order traversal (left-root-right)
//     inOrderTraversal(node = this.root) {
//       if (node !== null) {
//         this.inOrderTraversal(node.left);
//         console.log(node.value);
//         this.inOrderTraversal(node.right);
//       }
//     }


//     height(){
//         let max = 0 ;

//         const helper = (node = this.root, count = 0) => {
//             if(!node) return ;

//             helper(node.left, count)
//             count ++ ;
//             if(max < count) max = count;
//             helper(node.right, count)
            
//         }

//         helper();
//         return max
//     }
//   }
  
//   // Example usage
//   const tree = new BinaryTree();
//   tree.insert(10);
//   tree.insert(5);
//   tree.insert(15);
//   tree.insert(3);
//   tree.insert(7);
//   tree.insert(31)
//   tree.insert(32)
//   tree.insert(33)
//   tree.insert(34)
//   console.log(tree.height())
  
//   console.log("In-order Traversal:");
//   tree.inOrderTraversal();  // Output: 3, 5, 7, 10, 15
  



// BST 

// Node class with left and right children
class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    // Insert method that allows duplicates (go to the right)
    insert(value) {
      const newNode = new TreeNode(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this._insertNode(this.root, newNode);
      }
    }
  
    _insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this._insertNode(node.left, newNode);
        }
      } else {
        // Duplicates go to the right
        if (node.right === null) {
          node.right = newNode;
        } else {
          this._insertNode(node.right, newNode);
        }
      }
    }

    delete(val, parent = null){
        let node = this.root;
        if(val < node.value) node.right ? this.delete(node.right, node): false;
        if(val > node.value) node.left ? this.delete(node.left, node): false;

        else {
            if(!node.left && !!node.right){
                if(parent){
                    if(parent.left.val === val) parent.left = null;
                    else  parent.right = null;
                }
            } else if (!node.left){
                if(parent){
                    if(parent.left.val === val) parent.left = node.right;
                    else parent.right = node.right;
                }
            } else if(!node.right) {
                if(parent){
                    if(parent.left.val === val) parent.left = node.left;
                    else  parent.right = node.right;
                }
            }
            else {
                let minRig = this.findMin(node.right);
                node.val = minRig;
                this.delete(minRig)
            }
        }


        
    }

    findMin(node){
        return node.left ? this.findMin(node.left) : node;
    }

    // In-order traversal
    inOrderTraversal(node = this.root) {
      if (node !== null) {
        this.inOrderTraversal(node.left);
        console.log(node.value);
        this.inOrderTraversal(node.right);
      }
    }


    removeDuplicate(){

        const helper = (node) => {
            if(!node) return;

            helper(node.left);
            if(node.right.val === node.val){
                this.delete(node.right)
            }
            helper(node.right);
        }

        helper(this.root);
    }



  }
  
  // Example usage
  const bst = new BinarySearchTree();
  bst.insert(10);
  bst.insert(5);
  bst.insert(15);
  bst.insert(10); // duplicate
  bst.insert(5);  // duplicate\
  bst.removeDuplicate()
  
  console.log("In-order Traversal (with duplicates):");
  bst.inOrderTraversal(); // Output: 5, 5, 10, 10, 15
  