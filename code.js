'use strict';

function favIceCream(name){
  return "I love " + name;
}

function shouting(sentence){
  return sentence.toUpperCase();
}

function roundDown(num){
  return Math.floor(num);
}

function theTruth(name){
  if (typeof name === "undefined"){
    name = true;
  }
  return name;
}
