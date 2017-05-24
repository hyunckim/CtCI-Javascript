'use strict';

/**
 * Keep track of characters counts with a Map data structure, fail when
 * str2 has a character different to str2 or if any characters are left over
 * at the end.
 *
 * N = |str1| && M = |str2|
 * Time: O(N + M)
 * Additional space: O(N)
 *
 * @param  {string[]} str2 First string, passed in as a character array
 * @param  {string[]} str1 Second string, passed in as a character array
 * @return {boolean}       True if first and second strings are permutations otherwise false
 */
export function isPermutationMap(str1, str2) {

  if (str1.length === 0 || str1.length !== str2.length) {
    return false;
  }

  let chars = {};

  for (let i = 0; i < str1.length; i++) {
    chars[str1[i]] = chars[str1[i]] + 1 || 1;
  }

  for (let j = 0; j < str2.length; j++) {
    let count = chars[str2[j]];
    if (!count) { return false; }
    else {
      if (count === 0) {
        return false;
      }
      if (count === 1) {
        delete chars[str2[j]];
      }
      else {
        chars[str2[j]] -= 1;
      }
    }
  }
  return Object.keys(chars).length === 0;
}

/**
 * Sort both strings and check if they are equal afterwards. Permutations will
 * be identical sorted strings.
 *
 * N = |str1| && M = |str2|
 * Time: O(N lg N + M lg M)
 * Additional space: O(1) if able to modify original strings, O(N + M) otherwise
 *
 * @param  {string[]} str2 First string, passed in as a character array
 * @param  {string[]} str1 Second string, passed in as a character array
 * @return {boolean}       True if first and second strings are permutations otherwise false
 */
export function isPermutationSorted(str1, str2) {

  if (str1.length === 0 || str1.length !== str2.length) {
    return false;
  }

  str1.sort();
  str2.sort();

  return str1.join() === str2.join();
}
