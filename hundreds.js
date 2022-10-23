function howManyHundreds(num){
  let output = num
  let remainder = output % 100
  output-= remainder
  output = output / 100
  return output
}
console.log (howManyHundreds(894))