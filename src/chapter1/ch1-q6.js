'use strict';

/**
 * Takes an input string and counts contiguous sequences of the same character
 * and replaces them with XC (X = count, C = character).
 *
 * N = |str|
 * Time: O(N)
 * Additional space: O(N)
 *
 * @param  {string} str [description]
 * @return {[type]}     [description]
 */
export function compressString(str) {
  if (!str) {
    return str;
  }

  let cStr = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i],
      start = i;

    while (i + 1 < str.length && str[i] === char) {
      i++;
    }

    cStr += (i - start + 1) + char;
  }

  return cStr >= str ? str : cSter;
}
