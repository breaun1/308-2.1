//Part 1 Variables

let radius = 3.14 * 5 * 5; //Total area of space 78.5 m^2
let plantSpace = 0.8 * 0.8; //Space per plant 0.64 m^2
let numOfPlants = 20; //Starting number of plants
let weekOne = numOfPlants * 2;
let weekTwo = weekOne * 2;
let weekThree = weekTwo * 2;

//Part 2 Variables
let biggerRadius = Math.round(Math.sqrt(radius * 5 / 3.14)*2).toFixed(2); //The radius for 20 plants is 78.5. For 100 plants its 392.5 m^2. The radius is 22.36.

const resultOne = (week) => {
  if (week === "Week one") {
    console.log(
      `You have grown ${weekOne} plants this week.That is about ${Math.round(
        plantSpace
      )} sqft per plant. In total ${Math.floor(
        plantSpace * weekOne
      )} sqft for all plants.`
    );
  } else if (week === "Week two") {
    console.log(
      `You have grown ${weekTwo} plants this week. In total ${Math.floor(
        plantSpace * weekTwo
      )} sqft for all plants.`
    );
  } else if (week === "Week three") {
    console.log(
      `You have grown ${weekThree} plants this week. In total ${Math.floor(
        plantSpace * weekThree
      )} sqft for all plants.`
    );
  } else {
    console.log("Error");
  }
};
console.log(resultOne("Week one"));

const pruneTime = radius * 0.8;
const halfTime = radius * 0.5;
const plant = radius * 0.2;
const prune = plant;

switch (prune) {
  case pruneTime:
    console.log(
      `To stop them from exceeding ${pruneTime/radius*100}% capacity of the garden, please prune the plants this week.`
    );
    break;

  case halfTime:
    console.log(
      `They are growing at an acceptable rate of between ${halfTime/radius*100}% - ${pruneTime/radius*100}% capacity of the garden, please continue to monitor them.`
    );
    break;

  case plant:
    console.log(
      `You can plant more plants. Your plants are at about ${plant/radius*100}% capacity or less.`
    );
    break;

    case biggerRadius:
    console.log(
      `Please prune the plants. The scientists started with 100 plants, and did not prune them for 10 weeks.`
    );
    break;


}
