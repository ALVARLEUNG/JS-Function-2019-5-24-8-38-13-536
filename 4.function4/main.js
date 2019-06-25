function countWords(message){
  // wirte your code here
  var count = message.split(' ').length;
  document.write(count);
}
countWords('Good morning, I love JavaScript.'); // should return 5