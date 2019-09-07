import { Calculator } from './../src/calculator.js';

describe ('Calculator', function() {
  let testInput; 

  beforeEach(function() {
    testInput = new Calculator(30, 80, 75);
  });


  it('should return the amount of remaining years', function() {
    let yearsRemaining = testInput.remainingYears();
    expect(Math.floor(yearsRemaining)).toEqual(45);
  });

  it('should return the amount of years past life expectancy', function() {
    let pastExpectancy = testInput.yearsPastExpectancy();
    expect(Math.floor(pastExpectancy)).toEqual(5);
  });

  it('should return current age adjusted for given planet years', function() {
    let mercuryAge = testInput.mercuryYears();
    let venusAge = testInput.venusYears();
    let marsAge = testInput.marsYears();
    let jupiterAge = testInput.jupiterYears();
    expect(Math.floor(mercuryAge)).toEqual(1);
    expect(Math.floor(venusAge)).toEqual(0);
    expect(Math.floor(marsAge)).toEqual(15);
    expect(Math.floor(jupiterAge)).toEqual(2);
  });

  it('should return remaining years evaluated for planet conditions', function() {
    let remainingYearsOnPlanet = testInput.remainingYearsOnPlanet();
    expect(Math.floor(remainingYearsOnPlanet)).toEqual(45);
  });

  it('should return the amount of years lived past expectancy for each planet conditions', function() {
    let yearsPastExpectancyOnPlanet = testInput.yearsPastExpectancyOnPlanet();
    expect(Math.floor(yearsPastExpectancyOnPlanet)).toEqual(5);
  });
});