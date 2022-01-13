// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
    
    console.log("input = " + input)
    console.log("shift = " + shift)
    console.log("encode = " + encode)
    const message = input.toLowerCase();
    let newIndex = [];
    let result = []
    let index = 0;
    if(encode === false) shift = -shift;
     for (let i = 0; i < message.length; i++) {
        
         index = alphabet.indexOf(message[i]);
       
       //--------------NEW CODE -------------//
         if(index === -1) {
            result.push(message[i])
            continue;
         };
         
       //------------------------------//
         index += shift;
       
         if (index > 25) index -= 26;
         if (index < 0) index += 26;
         //newIndex.push(index);
         result.push(alphabet[index])
    }
    let out = result.join('')
    console.log(out)
    return out;
//     let arr = newIndex.join(', ');
//     String.fromCharCode(arr);
//     console.log('this is a test message')
//     console.log(arr);
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };


    