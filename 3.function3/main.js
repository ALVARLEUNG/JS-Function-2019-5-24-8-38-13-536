function alphabetSort(message){
  // wirte your code here
  var arr = message.split('').sort().join('');
  document.write(arr);
}
alphabetSort('hello'); // should return 'ehllo'