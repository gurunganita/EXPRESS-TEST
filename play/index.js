// Write a js function that converts number into Proper Format
// Eg: 10000 => 10,000
// eg: 100000 => 100,000;
// eg:1000000 => 1,00,000

// Library function
// Argument pass in Library Function
// Destructor
const { numberFormatter } = require("./library");
const getFormattedNumber = (num) => {
  const resp = numberFormatter(num);
  return resp;
};
const res = getFormattedNumber(10000);
console.log({ res });
