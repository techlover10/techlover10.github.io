function generateEDM(){
  var number = document.getElementById('number').value; 
  var vowels = ['a','e','i','o','u'];
  var trapletters = ['z','t','v','r','s','m'];
  var x;
  var nameArr = [];
  for (x = 0; x< number; x++){
    var lim = Math.ceil(Math.random()*5+3);
    var idx = 0;
    var name = "";
    cChar = String.fromCharCode(Math.floor(Math.random()*26)+65);
    name = name + cChar;
    for (idx = 1; idx < lim; idx++){
      p = Math.random();
      if (p < 0.3){
        name = name + String.fromCharCode(Math.floor(Math.random()*26)+97);
      } else if (p < 0.6) {
        name = name + trapletters[Math.floor(Math.random()*6)];
      } else {
        name = name + vowels[Math.floor(Math.random()*5)];
      }
    }
    nameArr.push(name);
  }
  var n = 0;
  var prettyString = "";
  for (n = 0; n < nameArr.length; n++){
    prettyString = prettyString + nameArr[n] + '<br>';
  }
  document.getElementById('edmout').innerHTML = prettyString;
  console.log(nameArr);
}
