const sumAll = function(x,y) {
   let min;
   let max;
   if (x < y) {
      min = x;
      max = y;
   } else if (y < x) {
      min = y;
      max = x;
   }

   let totalSum = 0;

   if (x < 0 || typeof(x) != "number" || typeof(y) != "number" ) {
      return "ERROR"
   } else {
   while (min <= max) {
      totalSum += min;
      min++;
   }
}
   return totalSum;
};

module.exports = sumAll