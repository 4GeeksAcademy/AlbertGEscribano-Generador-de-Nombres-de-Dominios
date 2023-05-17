/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let articles = ["the", "our", "some", "any", "another", "super"];
  let adjectives = [
    "great",
    "big",
    "best",
    "cool",
    "funny",
    "awesome",
    "random",
    "super",
    "incredible",
    "brutal"
  ];
  let nouns = [
    "racoon",
    "jogger",
    "website",
    "webapp",
    "blog",
    "hub",
    "page",
    "web",
    "site",
    "app",
    "control"
  ];
  let tlds = [
    ".com",
    ".de",
    ".cat",
    ".dog",
    ".space",
    ".org",
    ".rocks",
    ".eu",
    ".fr",
    ".us"
  ];

  let domainNames = [];
  for (let article of articles) {
    for (let adjective of adjectives) {
      for (let noun of nouns) {
        for (let tld of tlds) {
          domainNames.push(`${article}${adjective}${noun}${tld}`);
        }
      }
    }
  }

  document.querySelector("#generator").onclick = () => {
    document.querySelector("#domain").innerHTML = `<h1>${
      domainNames[Math.floor(Math.random() * domainNames.length)]
    }</h1>`;
  };
};
