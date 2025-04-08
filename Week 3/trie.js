class TrieNode {
    constructor (){
        this.children = {}
        this.isEndOfWord = false;
    }
}


class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    
    insert(word){
        let node = this.root;
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }
    
    search(word){
        let node = this.root;
        for(let char of word){
            if(!node.children[char]) return false;
            node = node.children[char];
        }
        return node.isEndOfWord;
    }
    
    
    startsWith(prefix){
        let node = this.root;
        for(let char of prefix){
            if(!node.children[char]) return false;        
            node = node.children[char];
        }   
        return true;
    }
    
    
    delete(word){
        const delRec = (node, word , index) => {
            if(index === word.length) {
                if(!node.isEndOfWord) return false;
                node.isEndOfWord = false;
                return Object.keys(node.children).length === 0 ;
            }
            
            const char = word[index];
            const child = node.children[char];
            if(!child)return false; 
            
            const shouldDele = delRec(child, word, index + 1);
            
             if(shouldDele){
                 delete node.children[char];
                 return (
                    !node.isEndOfWord && 
                    Object.keys(node.children).length === 0
                     )
             }
             return false
        };
        delRec(this.root, word, 0);
    }
    
    getAllWordsWithPrefix(prefix){
        const words = [];
        let node = this.root;
        
        for (let char of prefix) {
            if(!node.children[char]) return words;
            node = node.children[char];
        }
        
        const dfs = (node, path) => {
            if(node.isEndOfWord){
                words.push(path);
            }
            for(let char in node.children){
                dfs(node.children[char], path + char);
            }
        }
        dfs(node, prefix);
        return words
    }
}



const trie = new Trie();
trie.insert("apple");
trie.insert('app')
console.log(trie.search("apple"));     // true
console.log(trie.search("app"));       // false
console.log(trie.startsWith("app"));   // true
trie.insert("app");
console.log(trie.search("app")); // true


// trie.delete('apple')
console.log(trie.search("app")); 
console.log(trie.search("apple"))
console.log(trie.getAllWordsWithPrefix('ap'))
