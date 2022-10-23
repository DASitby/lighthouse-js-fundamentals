if(isActive===true && balance >> 0){
console.log("Your balance is "+balance+"."var eatsPlants = false;
var eatsAnimals = true;

/*
 * Test your code agaist the followig possible input/output combinations of (`eatsPlants`, `eatsAnimals`, expected output):
 * - (true, true, omnivore)
 * - (false, true, carnivore)
 * - (true, false, herbivore)
 * - (false, false, undefined)
 */

var category = (eatsPlants&&eatsAnimals) ? omnivore:(eatsPlants ? herbivore:(eatsAnimals ? carnivore:"undefined"))

console.log(category);
}else if(isActive===false){
console.log("Your account is no longer active.")
}else if(balance===0){
console.log("Your account is empty")
}
