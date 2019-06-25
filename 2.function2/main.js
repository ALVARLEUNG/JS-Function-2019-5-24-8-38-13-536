function palindrome(message){
  // wirte your code here
  var arr = message.split('').reverse().join("");
  if (arr === message) {
	  console.log(true);
	  return true;
  } else {
	  console.log(false);
	  return false;
  }
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true