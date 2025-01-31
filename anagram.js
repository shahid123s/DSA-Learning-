// Question Number 3 - Valid  Anagram
//  two words are made by same letter or not  if it is same then it anagram else it not ;
//  leetcode question Number - 242



// this is the first method --

// const isAnagram = (s, t) => {
//     s = s.split('').sort().join('');
//     t = t.split('').sort().join('');

//     return s === t
// }



// this is the seconde method ---

// const isAnagram = (s, t) => {
//     return s.split('').sort().join('') === t.split('').sort().join('');
// }


// third method -- 


    const isAnagram = (s, t) => {
        if(s.length !== t.length) return false;

        let obj1 = {}
        let obj2 = {};

        for (let i = 0; i < s.length; i++) {
            obj1[s[i]] = (obj1[s[i]] || 0) + 1;
            obj2[t[i]] = (obj2[t[i]] || 0) + 1;

        }

        for(const key in obj1){
            if(obj1[key] !== obj2[key]) return false
        }

        return true
    }

    // console.log(isAnagram('shahid', 'shashi'))



console.log(isAnagram('shahid', 'dihahs')) 