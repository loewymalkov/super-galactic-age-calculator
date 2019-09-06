import { Calculator } from './../src/calculator.js';

describe ('Calculator', function() {
  let testInput = new Calculator(30, 80);

  beforeEach(function() {
    testInput.age = 30;
    testInput.oldAge = 80;
    this.lifeExpectancy = 75;
  });


  it('should return the amount of remaining years', function() {
    this.age.remainingYears();
    expect(Math.floor(this.age)).toEqual(45);
  });

  it('should return the amount of years past life expectancy', function() {
    this.oldAge.yearsPastExpectancy();
    expect(Math.floor(this.oldAge)).toEqual(5);
  });

  it('should return current age adjusted for given planet years', function() {
    this.age.mercuryYears();
    this.age.venusYears();
    this.age.marsYears();
    this.age.jupiterYears();
    expect(Math.floor(this.age)).toEqual(1);
    expect(Math.floor(this.age)).toEqual(0);
    expect(Math.floor(this.age)).toEqual(15);
    expect(Math.floor(this.age)).toEqual(2);
  });

  it('should return remaining years evaluated for planet conditions', function() {
    let adjustedRemainingYears = this.age.remainingYears().testPlanetYears();
    expect(Math.floor(adjustedRemainingYears)).toEqual(22);
  });

  it('should return the amount of years lived past expectancy for each planet conditions', function() {
    let adjustedYearsPastExpectancy = this.age.yearsPastExpectancy().testPlanetYears();
    expect(Math.floor(adjustedYearsPastExpectancy)).toEqual(2);
  });
});