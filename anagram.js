// Question Number 3 - Valid  Anagram
//  two words are made by same letter or not  if it is same then it anagram else it not ;
//  leetcode question Number - 242

const isAnagram = (s, t) => {
    s = s.split('').sort().join('');
    t = t.split('').sort().join('');

    return s === t
}

console.log(isAnagram('shahid', 'dihah')) 