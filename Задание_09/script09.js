function makeCounter(number) {
  let count = number;

  return function() {
    return count++; // есть доступ к внешней переменной "count"
  };
};

let n = 10; // число с которого начинается отсчет
let calls = 3; //
let counter = makeCounter(n);

for(let i = 0; i < calls; i++) {
  console.log(counter())
}