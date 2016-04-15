var pow = require('../js/app.js');

describe('pow', function() {
  it('should calculate x^n, 0 < x < 9', function() {
    console.log('\n');
    for (var i = 1; i < 9; i++) {
      var expected = i * i * i;
      expect(pow(i, 3)).toBe(expected);
      console.log(i + ' в кубi буде ' + expected);
    }
  });

  it('should calculate x^0', function() {
    console.log('\n');
    for (var i = 1; i < 9; i++) {
      expect(pow(i, 0)).toBe(1);
      console.log(i + ' в нулевiй степенi буде ' + 1);
    }
  });

  it('should return NaN when x and n is 0', function() {
    expect( isNaN(pow(0, 0)) ).toBeTruthy();
    console.log('\n');
    console.log('нуль в степенi нуль повертає NaN');
  });

  it('should return NaN when n < 0' , function() {
    expect( isNaN(pow(8, -3)) ).toBeTruthy();
    console.log('\n');
    console.log('на вiд\'ємних степенях повертає NaN');
  });

  it('should return NaN when n is not an integer', function() {
    expect( isNaN(pow(8, 2.685)) ).toBeTruthy();
    console.log('\n');
    console.log('на дробних степенях повертає NaN');
  });

  it('should return Infinity when x or n is Infinity', function() {
    expect(pow(8, Infinity)).toBe(Infinity);
    expect(pow(Infinity, 8)).toBe(Infinity);
    console.log('\n');
    console.log('на безкiнечностях вiдразу повертає безкiнечнiсть! ура!!!');
  });
});