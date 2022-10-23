const chooseStations = function (stations) {
  let goodStations = []
  for(let i = 0; i < stations.length; i++){
  
    let array = stations[i]
    if ((array[1] >= 20 && array[2] === ("school")) || (array[1] >= 20 && array[2] === ("community centre"))){
      goodStations.push(array[0])
    }
  }
  return goodStations
}

const station = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(station));
