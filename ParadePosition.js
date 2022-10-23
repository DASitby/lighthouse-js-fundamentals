const finalPosition = function (moves) {
  let output = [0, 0]
  for(let i = 0; i <= moves.length; i++){
    if(moves[i] === 'north'){
      output[1]++
    }else if(moves[i] === 'south'){
      output[1]--
    }else if(moves[i] === 'east'){
      output[0]++
    }else if(moves[i] === 'west'){
      output[0]--
    }
  }
  return output
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));