// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const n2w = {
    11: 'A',
    21: 'B',
    31: 'C',
    41: 'D',
    51: 'E',
    12: 'F',
    22: 'G',
    32: 'H',
    42: 'I/J',
    52: 'K',
    13: 'L',
    23: 'M',
    33: 'N',
    43: 'O',
    53: 'P',
    14: 'Q',
    24: 'R',
    34: 'S',
    44: 'T',
    54: 'U',
    15: 'V',
    25: 'W',
    35: 'X',
    45: 'Y',
    55: 'Z'
  };
  const w2n = {
    A: 11, 
    B: 21,
    C: 31,
    D: 41,
    E: 51,
    F: 12,
    G: 22,
    H: 32,
    I: 42,
    J: 42,
    K: 52,
    L: 13,
    M: 23,
    N: 33,
    O: 43,
    P: 53,
    Q: 14,
    R: 24,
    S: 34,
    T: 44,
    U: 54,
    V: 15,
    W: 25,
    X: 35,
    Y: 45,
    Z: 55,
    ' ': ' '
  };
  const polybius = (input, encode = true) => {
    // your solution code here
    if (encode) {
      let conversion = input.toUpperCase();
      // split string to individual and put into an array
      let code = [...conversion].map(i => {
        // otherwise return numbers
        return w2n[i];
      })
      return code.join('');
    } else {
         if (input.split(" ").join("").length % 2 === 1) return false;
      // split string to individual and put into an array
      input = input.split(" ").map((item) => {
        let arr = [];
        for (let i = 0; i < item.length - 1; i += 2) {
          arr.push(Number(item[i] + "" + item[i + 1]));
        }
        return (arr.map(n => n2w[n].toLowerCase()).join(''));
      });
      return input.join(' ')
    }
  };

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
