/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if (i === nums.length-1) return nums[i];
  else return nums[i] * product(nums, i+1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0, long=0) {
  const l = words[i].length > long ? words[i].length : long;

  if (i === words.length-1) return l;
  else return longest(words, i+1, l);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0, result="") {
  if (i >= str.length-1){
    result = i < str.length ? (result + str[i]) : result;
    return result;
  } else {
    result += str[i];
    return everyOther(str, i+2, result);
  }
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0) {
  const rI = ((str.length-1) - i);
  if (rI <= i) return true;
  else{
    return str[i] === str[rI] ? isPalindrome(str, i+1) : false;
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (i === arr.length - 1) return -1;
  else return arr[i] === val ? i : findIndex(arr, val, i+1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = str.length-1, result="") {
  if (i === 0) return (result + str[i]);
  else{
    result += str[i];
    return revString(str, i-1, result);
  }
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, result=[]) {
  for (let val of Object.values(obj)){
    if (typeof val === 'object'){
      gatherStrings(val, result);
    } else if (typeof val === 'string') {
      result.push(val);
    }
  }
  return result;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start = 0, end = (arr.length-1)) {
  if (start === end) return arr[start] === val ? start : -1;
  // "split" array
  const mid = Math.floor((end + start) * 0.5);
  if (arr[mid] === val) return mid;

  // recursive search
  if (val > arr[mid]){
    return binarySearch(arr, val, mid+1, end);
  } else {
    return binarySearch(arr, val, start, mid);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
