function pow (x, n) {
  if (x === 0 && n === 0) return NaN;
  if (n < 0 || n - Math.floor(n)) return NaN;
  if (x === Infinity || n === Infinity) return Infinity;

  var result = 1;
  for (var i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

module.exports = pow;