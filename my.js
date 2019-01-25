var add1 = document.getElementById("add1");
var add2 = document.getElementById("add2");
var min1 = document.getElementById("min1");
var min2 = document.getElementById("min2");
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var mul1 = document.getElementById("mul1");
var mul2 = document.getElementById("mul2");
var addans = document.getElementById("addans");
var minans = document.getElementById("minans");
var divans = document.getElementById("divans");
var mulans = document.getElementById("mulans");

addans.addEventListener("click", function() {
 var s = Number(add1.value);
 var a = Number(add2.value);
  result = document.createTextNode(s + a);
  add1.parentElement.appendChild(result)
  add1.value="";
  add2.value="";
  
});

minans.addEventListener("click", function() {
  var l = Number(min1.value);
  var b = Number(min2.value);
   ok = document.createTextNode(l - b);
   add1.parentElement.appendChild(ok)
    min1.value="";
   min2.value="";
  
 });

 divans.addEventListener("click", function() {
  var m = Number(div1.value);
  var d = Number(div2.value);
   yes = document.createTextNode(m / d);
   div1.parentElement.appendChild(yes)
    div1.value="";
   div2.value="";
  
 });

 mulans.addEventListener("click", function() {
  var j = Number(mul1.value);
  var r = Number(mul2.value);
   aiit = document.createTextNode(j * r);
   mul1.parentElement.appendChild(aiit)
    mul1.value="";
   mul2.value=""; 
  
 });
 


function reversestring(str)
{
  var split = str.split("");
  var reverse = split.reverse();
  var join = reverse.join("");
  return join;
}
var some = prompt("Type something and see the MAGIC");
alert(reversestring(some));