const salaries = {
  Alice: 150,
  Bob: 700,
  Charlie: 150,
  Vas: 400,
  Gorg: 100,
  Vazg: 500,
};

//функция подсчета зарплат
function getTotalSalary(obj) {
  let sum = 0;
  for(let i in obj) sum += obj[i];
  return sum;
};

let sumOfSalary = getTotalSalary(salaries);
console.log(sumOfSalary);