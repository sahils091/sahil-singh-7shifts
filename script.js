// Function
const stringCalculator = (string) => {
  let split;
  let sum = 0;
  let delimiter = ",";
  let negArr = [];

  if (string.length < 1) {
    return sum;
  }

  string = string.replaceAll("\n", "");

  if (string.includes("//")) {
    let indexOfDlmtr = string.indexOf(string.match(/\d/));
    delimiter = string.substr(2, string.match(/\d/));
    string = string.substr(indexOfDlmtr);
  }

  split = string.split(delimiter);

  for (let i = 0; i < split.length; i++) {
    if (Number(split[i]) > 1000) {
      sum += 0;
    } else if (Number(split[i]) < 0) {
      console.error("Negatives not allowed", Number(split[i]));
      negArr.push(Number(split[i]));
      break;
    } else {
      sum += Number(split[i]);
    }
  }
  if (negArr.length === 0) {
    return sum;
  } else {
    return "Please Check Your Input";
  }
};

// Tests to validate

//Empty String

console.log(stringCalculator(""));

//non Empty Strings

console.log(stringCalculator("1,2,3"));
console.log(stringCalculator("155,22,345"));
console.log(stringCalculator("1,2,3,55,8,9,542,6"));

// Accommodate for line breaks

console.log(stringCalculator("14526\n,852,89"));
console.log(stringCalculator("1,2\n,3\n"));
console.log(stringCalculator("10,20\n,30\n"));

//Custom De-limiter

console.log(stringCalculator("//;\n1;3;4"));
console.log(stringCalculator("//$\n1$2$3"));
console.log(stringCalculator("//hh\n1hh2hh3"));

// Account for Negative Numbers
console.log(stringCalculator("1,-2"));
console.log(stringCalculator("1,-2, -4,2"));

// Account for numbers over 1000
console.log(stringCalculator("1,2000, 2, 3"));
