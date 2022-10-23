function ageCalculator(name, yearOfBirth, currentYear){
  let age = currentYear - yearOfBirth
  let output = '' + name + ' is ' + age + ' years old.' 
  return output
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));