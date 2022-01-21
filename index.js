const fs = require("fs");

function _base64ToArrayBuffer(base64string) {
  // decode base64 string to binary string
  // get length of binary string
  // create array of 8 bit Unsigned itegers ( Unsigned integers = positive numbers only) length of Array = length of binary string
  // loop over each value in the binary string and place values in the array [bytes]
  var binary_string = atob(base64string);
  var len = binary_string.length;
  var bytes = new Uint8Array(len);

  for (var i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  console.log("the bytes: " + bytes);

  const newArr = [];
  // iterate over each value in the bytes buffer
  bytes.forEach(function (value, i) {
    let niceText = "";
    newArr.push(value.toString(2).padStart(8, "0")); //convert decimal value to base2 + append with 0s to format in lengths of 8 bits
    niceText += `${newArr}`;
  });

  fs.appendFile(
    "./newOutFile.csv",
    JSON.stringify(newArr) + "\n",
    { flag: "a" },
    (err) => {
      if (err) {
        console.log(err);
        return;
      }
    }
  );
}

if (typeof Buffer.from === "function") {
  b64stringArray = [
    "gAAA",
    "QAAA",
    "IAAA",
    "EAAA",
    "CAAA",
    "BAAA",
    "AgAA",
    "AQAA",
    "AIAA",
    "AEAA",
    "ACAA",
    "ABAA",
    "AAgA",
    "AAQA",
    "AAIA",
    "AAEA",
    "AACA",
    "AABA",
    "AAAg",
    "AAAQ",
    "AAAI",
    "AAAC",
    "AAAB",
    "AAAgwBAA",
    "AAAAgAAA",
    "AAAAQAAA",
    "AAAAIAAA",
    "AAAAEAAA",
    "AAAACAAA",
    "AAAABAAA",
    "AAAAAkAA",
    "AAAAAgAA",
    "AAAAAQAA",
    "AAAAAIAA",
    "AAAAACAA",
    "AAAAABAA",
    "AAAAAAgA",
    "AAAAAAQA",
  ];

  /*   console.log(`==== Begin ====`);
  console.log(`The original base64 string is "${b64stringArray[0]}"`);
  const buf = Buffer.from(b64stringArray[0], "base64"); 
  console.log(`The decoded b64 string "${b64stringArray[0]}" is : ${buf}`);
  const buf2 = buf.toString("base64");
  console.log(`The decoded string "${buf} " REencoded into base64 :  ${buf2}`); 

  _base64ToArrayBuffer(b64stringArray[0]); */
}
for (let element of b64stringArray) {
  console.log(element);
  _base64ToArrayBuffer(element);
}
