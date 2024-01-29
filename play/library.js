const numberformatter = (num) => {
  const string = String(num);
  const separatedArr = string.split("");
  let count = 0;
  let newString = "";
  for (let i = 0; i < separatedArr.length; i++) {
    newString += separatedArr.pop();
    count++;
    if (count === 3) {
      newString += ",";
      count = 0;
    }
  }
  newString = newString.split("").reverse().join("");
  console.log({ newString });
  return newString;
};
module.exports = { numberFormatter };
