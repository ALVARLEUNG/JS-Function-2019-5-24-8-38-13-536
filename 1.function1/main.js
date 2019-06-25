function reverseString(message){
  // wirte your code here
  if (message.length > 0) {
	  var arr = message.split('').reverse().join("");
	  document.write(arr);
  }
}
 reverseString('hello');