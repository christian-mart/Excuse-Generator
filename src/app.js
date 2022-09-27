/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The president", "I", "My mom", "My girlfriend"];
let action = ["swallowed", "broke", "forgot", "dropped"];
let what = ["a bomb", "my phone", "the car keys", "my hopes for the future"];
let when = [
  "when I got off work",
  "early in the morning",
  "after the bell rang",
  "when I left home",
  "before I went to sleep"
];

function randompicker(array) {
  let index = Math.floor(Math.random() * array.length);
  return array[index];
}

window.onload = function() {
  //write your code here
  let result =
    randompicker(who) +
    " " +
    randompicker(action) +
    " " +
    randompicker(what) +
    " " +
    randompicker(when);

  document.getElementById("excuse").innerHTML = result;
};
