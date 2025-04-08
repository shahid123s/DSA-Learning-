// What is binary search tree ? 
// It is a special type of Binary tree where left node of the parent node is always lesser than the parent node 
// and the right node is greater than the parent node 



class BST {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }

    insert(val) {
        if (this.val > val) {
            if (!this.left) this.left = new BST(val);
            else this.left.insert(val);
        } else {
            if (!this.right) this.right = new BST(val);
            else this.right.insert(val)
        }
    }

    contains(val) {
        if (val < this.val) return this.left ? this.left.contains(val) : false;
        else if (val > this.val) return this.right ? this.right.contains(val) : false;
        return true
    }

    delete(val, parent = null) {
        if (val < this.val) {
            if (this.left) this.left.delete(val, this);
        } else if (val > this.val) {
            if (this.right) this.right.delete(val, this);
        } else {
            // Case 1 : Leaf Node
            if (!this.left && !this.right) {
                if (parent) {
                    if (parent.left === this) parent.left = null;
                    else parent.right = null;
                }
            }
            // Case 2 . One child left (even left or right);
            else if (!this.left) {
                if (parent) {
                    if (parent.left === this) parent.left = this.right
                    else parent.right = this.right;
                }

            } else if (!this.right) {
                if (parent) {
                    if (parent.left === this) parent.right = this.left;
                    else parent.right = this.left;
                }
            }

            // Case 3. Two childer are present ;
            else {
                let minRight = this.right.findMin();
                this.val = minRight;
                this.right.delete(minRight, this)
            }
        }
    }
    findMin() {
        return this.left ? this.left.findMin() : this.val;
    }

    preOrderTraversal(node = this) {
        if (!node) return [];
        return [
            node.val,
            ...this.preOrderTraversal(node.left),
            ...this.preOrderTraversal(node.right)
        ]
    }
    // preorderTraversal(s) {
    //     console.log(this.val, s);
    //     if (this.left) this.left.preorderTraversal('left');
    //     if (this.right) this.right.preorderTraversal(' right');
    // }

    // usinge iteration 
    // closetsValue(target, root = this){
    //     let close = root.val;
    //     while(root){
    //         if(Math.abs(root.val - target)< Math.abs(close - target)){
    //             close = root.val;
    //         }
    //         root = target < root.val? root.left : root.right;
    //     }
    //     return close;
    // }

    // Using Recursion 

    closeVal(target, root = this, close = root.val) {
        if (!root) return close;
        if (Math.abs(root.val - target) < Math.abs(close - target)) {
            close = root.val;
        }
        return target < root.val ?
            this.closeVal(target, root.left, close) :
            this.closeVal(target, root.right, close)
    }
 
    checkIsBST(min = -Infinity, root = this, max = Infinity){
        if(!root) return true;
        if(root.val <= min || root.val >= max) return false;
        return this.checkIsBST(min, root.left, root.val) && 
                this.checkIsBST(root.val, root.right, max)
    }
}



let   = new BST(10);
bt.insert(21)
bt.insert(1)
bt.insert(3)
bt.insert(4)
bt.insert(15)
console.log(bt.checkIsBST())








console.log(bt.preOrderTraversal());
console.log(bt.closeVal(1100))



// Find the 