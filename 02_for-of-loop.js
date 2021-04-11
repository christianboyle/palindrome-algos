'use strict';


const clean = (str) => {
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, '');
  return str;
};

const isPalindrome = (str) => {
  const cleanStr = clean(str);
  const charArr = cleanStr.split('');

  for (let c of charArr) {
    if (c !== charArr.pop()) {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome('A man, a plan, a canal. Panama'));
