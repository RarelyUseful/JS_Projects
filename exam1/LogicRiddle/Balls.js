/* 
TASK DESCRIPTION:
There are 8 balls, one of them is heavier than the rest. 
You can only use scale twice.
Scale compares two elements, but you can put multiple balls on either side.
*/

const arr = [1, 1, 1, 1, 1, 2, 1, 1];

function result(arr) {
  if (arr.length != 8) {
    console.log("There should be 8 balls, result might be wrong");
  }
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  let ballsIndex = [0, 1, 2, 3, 4, 5, 6, 7];
  let selectedBalls = [];
  console.log("Selecting random 6 balls: ");
  // selecting 3 balls:
  for (let i = 0; i < 3; i++) {
    let randomBallIndex = ballsIndex.splice(getRandomInt(0, ballsIndex.length - 1), 1);
    selectedBalls.push(randomBallIndex);
  }
  console.log(
    `On the left, balls with indexes: ${selectedBalls[0]}, ${selectedBalls[1]}, ${selectedBalls[2]}.`
  );

  // selecting another 3 balls:
  for (let i = 0; i < 3; i++) {
    let randomBallIndex = ballsIndex.splice(getRandomInt(0, ballsIndex.length - 1), 1);
    selectedBalls.push(randomBallIndex);
  }
  console.log(
    `On the right, balls with indexes: ${selectedBalls[3]}, ${selectedBalls[4]}, ${selectedBalls[5]}.`
  );

  //comparing weight of 3 vs 3 balls in order from previous step
  let B1 = arr[selectedBalls[0]] + arr[selectedBalls[1]] + arr[selectedBalls[2]];
  let B2 = arr[selectedBalls[3]] + arr[selectedBalls[4]] + arr[selectedBalls[5]];
  if (B1 > B2) {
    console.log("Heavier ball is on the left.");
    console.log("Comparing first two of them:");
    if (arr[selectedBalls[0]] > arr[selectedBalls[1]]) {
      console.log("First one is heavier, so:");
      console.log(`Heavier ball has index ${selectedBalls[0]}.`);
    } else if (arr[selectedBalls[0]] < arr[selectedBalls[1]]) {
      console.log("Second one is heavier, so:");
      console.log(`Heavier ball has index ${selectedBalls[1]}.`);
    } else {
      console.log("Their weight is the same, so:");
      console.log(`Heavier ball has index ${selectedBalls[2]}.`);
    }
  } else if (B1 < B2) {
    console.log("Heavier ball is on the right.");
    console.log("Comparing first two of them:");
    if (arr[selectedBalls[3]] > arr[selectedBalls[4]]) {
      console.log("First one is heavier, so:");
      console.log(`Heavier ball has index ${selectedBalls[3]}.`);
    } else if (arr[selectedBalls[3]] < arr[selectedBalls[4]]) {
      console.log("Second one is heavier, so:");
      console.log(`Heavier ball has index ${selectedBalls[4]}.`);
    } else {
      console.log("Their weight is the same, so:");
      console.log(`Heavier ball has index ${selectedBalls[5]}.`);
    }
  } else if (B1 == B2) {
    console.log("Heavier ball was not selected yet.");
    console.log(`Comparing balls with indexes ${ballsIndex[0]} and ${ballsIndex[1]}:`);
    if (arr[ballsIndex[0]] > arr[ballsIndex[1]]) {
      console.log("First one is heavier, so:");
      console.log(`Heavier ball has index ${ballsIndex[0]}.`);
    } else {
      console.log("Second one is heavier, so:");
      console.log(`Heavier ball has index ${ballsIndex[1]}.`);
    }
  }
}

result(arr);
