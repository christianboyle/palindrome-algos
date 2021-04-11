export const clean = (str) => {
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, '');
  return str;
};
