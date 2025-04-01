// /**
//  * hashtable is the generalization of the array  It give  the functionality in which a acollection of data is stored in such a way that it is easly to find those items later if requried
//  *  This makes searching for an elemenet effeciently
//  * 
//  */


// // Create a hash Table

// class HashTavle {
//     constructor(){
//         this.table = new Array(10);
//         this.size = 0;
//     }

//     _setKey (key) {
//         return key % 10 
//     }

//     insert(val){
//         const index = this._setKey(val);
//         this.table[index] =  val;
//         this.size++;

//     }

//     get(key){
//         const indext = this._setKey(key);
//         return this.table[index]; 
//     }

//     search(val){
//         const index = this._setKey(val);
//         return this.table[index] ? this.table[index] : 'Not found'
//     }
//     del(key){
//         const index = this._setKey(key);

//     }
// }


// console.log('sha'.charCodeAt(2))



// class HashTable{
//     constructor(size = 7){
//         this.table = new Array (size);
//     }

//     _hash(key){ // this method is used for converting key into index of the array for string;
//         let hash = 0;
//         for(let i = 0 ; i < key.length; i++){
//             hash += key.charCodeAt(i);
//         }
//         return hash % this.table.length ;
//     }


//     // Inserting a value with key and value

//     set(key, value){
//         // if(typeof key  === 'number'){

//         // }
//         let index = this._hash(key)
//         this.table[index] = value;
//     }


//     get(key){
//         let index = this._hash(key);
//         return this.table[index];
//     }

//     del(key){
//         let index = this._hash(key);
//         this.table[index] = undefined;
//         return 
//     }

//     print(){
//         console.log(this.table)
//     }

// }


// let newHash = new HashTable(10);
// newHash.set('name', 'Shahid');
// newHash.set('mane', 'Football Player');
// newHash.set("age", 21)
// newHash.set("phone", 8129868268)

// newHash.print()
// console.log(newHash.get('name')) // now collition is not handled so name and mane can be collide 



// there are two type of collision handling 
//  1 - Seperate chaining  using Linked list 


class HashTable {
    constructor(size = 7) {
        this.table = new Array(size);
    }

    _hash(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }

    set(key, val) {
        let index = this._hash(key)
        if (!this.table[index]) { // initialize a bucket in an index 
            this.table[index] = [];
        }
        // check the key is already exists then update the vale
        for (let pair of this.table[index]) {
            if (pair[0] === key) {
                pair[1] = val;
                return
            }
        }
        this.table[index].push([key, val]); // store the value;

    }


    get(key) {
        let index = this._hash(key);
        if (this.table[index]) {
            for (let pair of this.table[index]) {
                if (pair[0] === key);
                return pair[1];
            }
        }
        return 'Nothing found'
    }

    print(){
        console.log(this.table)
    }
}


let newHash = new HashTable(10);
newHash.set('name', 'Shahid');
newHash.set('mane', 'Football Player');
newHash.set("age", 21)
newHash.set("phone", 8129868268)

newHash.print()

console.log(newHash.get('name'))  // Now collition handled 






// 2 - Lenear Probing ( Open Addressing )

class HashTableLenear {
    constructor(size = 7){
        this.table = new Array(size);
    }

    _hash(key){
        let hash = 0;
        for(let i =0 ; i < key.length; i++ ){
            hash  += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }

    set(key, val){
        let index = this._hash(key);
        while(this.table[index]){
            index = (index + 1) % this.table.length;
        };
        this.table[index] = [key, val];
    }

    get(key){
        let index = this._hash(key);
        while(this.table[index]){
            if(this.table[index][0] === key){
                return this.table[index][1];
            }
            index = (index+1) % this.table.length;
        };

        return 'No Key Found'
    }

    print(){
        console.log(this.table)
    }

}


let has = new HashTableLenear(10);

has.set('hello', 1)
has.set('elloh', 2)
has.set('hlelo', 3)


has.print()