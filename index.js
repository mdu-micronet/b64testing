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

  let newArr = [];
  bytes.forEach(function (value, i) {
    newArr.push(value.toString(2).padStart(8, "0"));
  });
  console.log(newArr);

  /*   console.log("DATAVIEW of byteBuff: ")
  console.log(new DataView(byteBuff))
  // be careful when logging out buffers, if part of text literal youwont get verbose output
  console.log(
    "Value of byteBuff (in its own console.log): "
  );
  console.log(byteBuff); */

  // stringify the array [bytes]
  const buffString = JSON.stringify(bytes);

  // parse that new string into JSON format
  const buffParse = JSON.parse(buffString);
  return buffParse;
}

if (typeof Buffer.from === "function") {
  // declare the base64 encoded string
  // log it out
  
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
 
  console.log(`==== Begin ====`);
  console.log(`The original base64 string is "${b64stringArray[0]}"`);
  // create a buffer called buff from the original base64string
  // pass it into Buffer.from(str, "encoding")
  // tell Buffer to decode the base64 string using base64

  const buf = Buffer.from(b64stringArray[0], "base64"); 
  console.log(`The decoded b64 string "${b64stringArray[0]}" is : ${buf}`);

  // re-encode the decoded string using base64
  const buf2 = buf.toString("base64");
  console.log(`The decoded string "${buf} " REencoded into base64 :  ${buf2}`); 

  _base64ToArrayBuffer(b64stringArray[0]);
}

console.log(b64stringArray[0])

for (let element of b64stringArray) {
  console.log(element)
  _base64ToArrayBuffer(element)
}
