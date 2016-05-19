" use strict ";
var phoneBookmap={};
function PhoneBook(){

};

function listAllNames() {
  // code to list all names
  var allNames="";
  for(var name in phoneBookmap){
    allNames+=name+"</br>"
  }
  display.innerHTML=allNames;
};

function listAllNumbers() {
  // code to list all numbers
  var allNumbers="";
  for(var each in phoneBookmap){
    allNumbers+=phoneBookmap[each]+"</br>";
  }
  display.innerHTML=allNumbers;
};

function showAdd() {
  var name = prompt("Enter full name");
  var number = prompt("Enter phone number");
  phoneBookmap[name]=number;
};

function showRemove() {
  var remove = prompt("Enter name to remove");
  delete phoneBookmap[remove];
};

function showLookup() {
  var lookup = prompt("Enter name to lookup");
  display.innerHTML=phoneBookmap[lookup];
};
function showReverseLookup(){
  var reverseLookup = prompt("Enter number to lookup");
  for(var each in phoneBookmap){
    if(reverseLookup==phoneBookmap[each]){
      display.innerHTML=each;
    }
  }
};

var display = document.getElementById("display");
