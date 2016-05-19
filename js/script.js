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
  for(var name in phoneBookmap){
    for(var i=0; i<phoneBookmap[name.toLowerCase()].length;i++){
      allNumbers+=phoneBookmap[name][i]+", ";
    }
    allNumbers = allNumbers.slice(0, -2) +"</br>";

  }
  display.innerHTML=allNumbers;
};

function showAdd() {
  var name = prompt("Enter full name");
  var number = prompt("Enter phone number");
  if(phoneBookmap[name.toLowerCase()]==null){
    var numbers=[];
    numbers.push(number);
    phoneBookmap[name.toLowerCase()]=numbers;
  }else{
    phoneBookmap[name.toLowerCase()].push(number);
  }
};

function showRemove(){
  var name = prompt("Enter name you want to remove");
  var number = prompt("Enter phone number you want to remove");
  if(phoneBookmap[name.toLowerCase()]!=null){
    for(var i=0; i<phoneBookmap[name.toLowerCase()].length;i++){
      if(phoneBookmap[name.toLowerCase()][i]==number){
        delete phoneBookmap[name.toLowerCase()][i];
      }
    }
  }
};

function showRemoveRecord() {
  var remove = prompt("Enter name to remove");
  delete phoneBookmap[remove];
};

function showLookup() {
  var lookup = prompt("Enter name to lookup");
  display.innerHTML=phoneBookmap[lookup];
};
function showReverseLookup(){
  var reverseLookup = prompt("Enter number to lookup");
  for(var name in phoneBookmap){
    for(var i=0; i<phoneBookmap[name.toLowerCase()].length;i++){
      if(reverseLookup==phoneBookmap[name][i]){
        display.innerHTML=name;
    }
  }
}
};

var display = document.getElementById("display");
