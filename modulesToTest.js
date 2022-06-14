function capitalizeName(s) {
    let name = s.split("");
    name[0] = name[0].toUpperCase();
    return name.join("");
  }
  
  function reverseString(stringToReverse) {
    let stringArray = stringToReverse.split("");
    let reversedArray = [];
    for (let i = stringArray.length - 1; i >= 0; i--) {
      reversedArray.push(stringArray[i]);
    }
    return reversedArray.join("");
  }
  
  const calculator = {
    add: function (a, b) {
      return a + b;
    },
    subtract: function (a, b) {
      return a - b;
    },
    multiply: function (a, b) {
      return a * b;
    },
    divide: function (a, b) {
      return a / b;
    }
  }
  
  function caesarCipher(message, key) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let encryptedArray = [];
    message = message.toLowerCase();
    let messageArray = message.split("");
  
    for (let i = 0; i < messageArray.length; i++) {
      if (!alphabet.includes(messageArray[i])) {
        encryptedArray.push(messageArray[i]);
      } else {
        let shiftedPlace = alphabet.indexOf(messageArray[i]) + key;
        if (shiftedPlace > 25) {
          shiftedPlace = shiftedPlace - 26;
        }
        encryptedArray.push(alphabet[shiftedPlace]);
      }
    }
    let encryptedString = encryptedArray.join("");
    return (encryptedString);
  }
  
  function analyzeArray(arr) {
    let average = calcAverage(arr);
    let min = calcMin(arr);
    let max = calcMax(arr);
    let length = arr.length;
  
    let obj = {
      average: average,
      min: min,
      max: max,
      length: length
    }
  
    return obj;
  }
  
  function calcAverage(arr) {
    let sum = arr.reduce((prevValue, currentValue) => prevValue + currentValue);
    let avg = sum / arr.length;
    return avg;
  }
  
  function calcMin(arr) {
    let min = arr[0];
    arr.forEach(element => {
      if (element < min) {
        min = element;
      }
    });
    return min;
  }
  
  function calcMax(arr) {
    let max = arr[0];
    arr.forEach(element => {
      if (element > max) {
        max = element;
      }
    });
    return max;
  }
  
  export { capitalizeName, reverseString, calculator, caesarCipher, analyzeArray };