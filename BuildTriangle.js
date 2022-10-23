function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}


function buildTriangle(height){
  let triangle = ""
  let nextRow = ""
  for (let i = 1;i<=height;i++){
       nextRow = makeLine(i)
       triangle += nextRow
  }
  return triangle
}

console.log(buildTriangle(10));