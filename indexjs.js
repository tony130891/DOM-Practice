let btn = document.querySelector("#new-Quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: "i'm creating a habit",
    person: "Myself",
  },
  {
    quote: "trying",
    person: "Past-self",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
