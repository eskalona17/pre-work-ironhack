var mars_rover = {
  direction: "S", 
  x: 0, 
  y: 0,
  travelLog: [0,0]
}

function turnLeft(mars_rover){
  console.log("turnLeft was called!");
  switch (mars_rover.direction){
    case "N":
      mars_rover.direction = "W";
    break;
    case "W":
      mars_rover.direction = "S";
    break;
    case "S":
      mars_rover.direction = "E";
    break;
    default:
      mars_rover.direction = "N";
    }
}

function turnRight(mars_rover){
  console.log("turnRight was called!");
  
  switch (mars_rover.direction){
    case "N":
      mars_rover.direction = "E";
    break;
    case "E":
      mars_rover.direction = "S";
    break;
    case "S":
      mars_rover.direction = "W";
    break;
    default:
      mars_rover.direction = "N";
    }
}

function moveForward(mars_rover){
  console.log("moveForward was called");

  if (mars_rover.direction === "N"){
    mars_rover.y +=1;
  
  } else if (mars_rover.direction === "W"){
    mars_rover.x -=1;
  
  } else if (mars_rover.direction === "S"){
    mars_rover.y -=1;
  
  } else {
    mars_rover.x +=1;
    }
}

function command(commandString){
  for (var i = 0; i <= commandString.length; i++){
    var j = commandString.charAt(i);

        if (j === "f") {
          moveForward(mars_rover);
          mars_rover.travelLog.push(mars_rover.x);
          mars_rover.travelLog.push(mars_rover.y);
        } 
        
        if (j === "r"){
          turnRight(mars_rover);
        } 
        
        if (j === "l"){
          turnLeft(mars_rover);
        }
    }
  }

command("rffrfflfrff");
console.log(mars_rover);


