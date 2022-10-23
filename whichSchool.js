const whichSchool = function(age){
  let school = ""
  if(age<13){
    school = "Elementary School"
  }else if(13<=age && age<18){
    school = "Secondary School"
  }else{
    school = "Lighthouse Labs"
  }
  return school
}
console.log(whichSchool(19))