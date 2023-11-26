
  /*  MATH PROBELMS  */
  const isDivisbleBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0;
  console.log(isDivisbleBy5);

  const isFirstNumIsLargerThanLast = (n1 > n4);
  console.log(isFirstNumIsLargerThanLast);

  const questionThree = ((n2 - n1) * n3) % n4;
  console.log(questionThree);

  const lessThan25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
  console.log(lessThan25);

/*    MATH PROBLEM 2 */
const distance = 1500;
const fuelBudget = 175;
const avgCostPerGal = 3;

const Speed55 = "55";
const Speed60 = "60";
const Speed23 = "75";

// show user the hours it'll take for arrival



console.log("distance / speed55");
console.log("distance / speed60");
console.log("distance / speed75");


// show fuel economy rate of speed multiplied by avg cost per gal


console.log(Speed55 * avgCostPerGal);
console.log(Speed60 * avgCostPerGal);
console.log(Speed75 * avgCostPerGal);
