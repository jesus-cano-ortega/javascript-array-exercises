let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]

function getParkingLotState(param){
  
  let state = {
    totalSlots: 0,
    availableSlots: 0,
    occupiedSlots: 0
  }

 
  for (let i = 0; i < param.length; i++){ //param.length --> 3; 
    for (let j = 0; j < param[i].length; j++){
      
      if (param[i][j] === 2){ // 2 = parking available
        state.availableSlots++;
        state.totalSlots++;
      }

      else if (param[i][j] === 1){ // 1 = parking occupied
        state.occupiedSlots++;
        state.totalSlots++;
      }

    }

  }

  return state

} 

console.log(getParkingLotState(parking_state))