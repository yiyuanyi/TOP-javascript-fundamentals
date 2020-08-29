const ftoc = function(num) {
  let cel = (num - 32) * (5/9);
  cel = Math.round(cel * 10) / 10;
  return cel;
}

const ctof = function(num) {
  let fah = (num * (9/5)) + 32 ;
  fah = Math.round(fah * 10) / 10;
  return fah;
}

module.exports = {
  ftoc,
  ctof
}
