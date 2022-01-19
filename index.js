function _base64ToArrayBuffer(base64string) {
  // decode base64 string to binary string
  // get length of binary string
  // create array of 8 bit Unsigned itegers ( Unsigned integers = positive numbers only) length of Array = length of binary string
  var binary_string = atob(base64string);
  var len = binary_string.length;
  var bytes = new Uint32Array(len);

  // loop over each value in the binary string and place values in the array [bytes]
  for (var i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }

  // create buffer of the array [bytes] and log it out
  const byteBuff = bytes.buffer;
  var str = new TextDecoder().decode(byteBuff)

  console.log("the bytes: "+ bytes);

/*   console.log("DATAVIEW of byteBuff: ")
  console.log(new DataView(byteBuff))
  // be careful when logging out buffers, if part of text literal youwont get verbose output
  console.log(
    "Value of byteBuff (in its own console.log): "
  );
  console.log(byteBuff); */

  // stringify the array [bytes]
  const buffString = JSON.stringify(bytes);
  // console.log(buffString);

  // parse that new string into JSON format
  const buffParse = JSON.parse(buffString);

/*   console.log(`The typeof for buffString is: ${typeof buffString}`);
  console.log(buffString);

  console.log(`The typeof for buffParse is: ${typeof buffParse}`);
  console.log(buffParse); */

  const arr = Array.from(Object.keys(buffParse), (k) => [`${k}`, buffParse[k]]);
  console.log(`An array of the key value pairs in the object: `);
  console.log(arr);

  //get value at [x][y]
/*   let decimal = arr[4][1];

  console.log(decimal);
  console.log(
    (
      "00000000000000000000000000000000000000000000000000000000" +
      decimal.toString(2)
    ).slice(-64)
  ); */

  //console.table(arr);
  return buffParse;
}

if (typeof Buffer.from === "function") {

  // declare the base64 encoded string
  // log it out
  base64string = "";
  b64stringArray = ["gAAA","QAAA","IAAA","EAAA","CAAA","BAAA","AgAA","AQAA","AIAA","AEAA","ACAA","ABAA","AAgA","AAQA","AAIA","AAEA","AACA","AABA","AAAg","AAAQ","AAAI","AAAC","AAAB","AAAgwBAA","AAAAgAAA","AAAAQAAA","AAAAIAAA","AAAAEAAA","AAAACAAA","AAAABAAA","AAAAAkAA","AAAAAgAA","AAAAAQAA","AAAAAIAA","AAAAACAA","AAAAABAA","AAAAAAgA","AAAAAAQA"]

/*   console.log(`==== Begin ====`);
  console.log(`The original base64 string is "${base64string}"`);

  // create a buffer called buff from the original base64string
  // pass it into Buffer.from(str, "encoding")
  // tell Buffer to decode the base64 string using base64

  const buf = Buffer.from(base64string, "base64"); 
  console.log(`The decoded b64 string "${base64string}" is : ${buf}`);

  // re-encode the decoded string using base64
  const buf2 = buf.toString("base64");
  console.log(`The decoded string "${buf} " REencoded into base64 :  ${buf2}`); */

  //_base64ToArrayBuffer(base64string);


  
}
console.log(base64string)

for (let element of b64stringArray) {
  console.log(element)
  _base64ToArrayBuffer(element)
}
