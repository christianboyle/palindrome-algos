'use strict';

let word = 'CiViC';
let str = word.toLowerCase();

const checkPalindrome = () => {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      console.log('NOT a palindrome');
      return false;
    }
  }
  console.log('The string is a palindrome');
  return true;
};

console.log(checkPalindrome());
