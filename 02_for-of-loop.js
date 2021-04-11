import { clean } from './clean.js';

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
