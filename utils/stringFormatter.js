const textShortner = (string) =>
  string.length > 40 ? string.slice(0, 40).concat("...") : string;
// const response = textShortner(
//   "Raktim is a MERN STACK teacher. He is teaching in broadway infosys"
// );
// console.log({ response });
module.exports = { textShortner };
