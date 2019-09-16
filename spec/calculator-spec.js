import { Calculator } from './../src/calculator.js';

describe ('Calculator', function() {
  let testInput; 

  beforeEach(function() {
    testInput = new Calculator(30, 80, 75);
  });


  it('should return the amount of remaining years', function() {
    this.yearsRemaining = testInput.remainingYears();
    expect(testInput.yearsRemaining).toEqual(45);
  });

  it('should return the amount of years past life expectancy', function() {
    this.pastExpectancy = testInput.yearsPastExpectancy();
    expect(testInput.pastExpectancy).toEqual(5);
  });

  it('should return current age adjusted for given mercury years', function() {
    this.mercuryAge = testInput.mercuryYears();
    expect(testInput.mercuryAge).toEqual(1);
  });

  it('should return current age adjusted for given venus years', function() {
    this.venusAge = testInput.venusYears();
    expect(testInput.venusAge).toEqual(0);
  });

  it('should return current age adjusted for given mars years', function() {
    this.marsAge = testInput.marsYears();
    expect(testInput.marsAge).toEqual(15);
  });

  it('should return current age adjusted for given planet years', function() {
    this.jupiterAge = testInput.jupiterYears();
    expect(testInput.jupiterAge).toEqual(2);
  });

  


  it('should return remaining years evaluated for planet conditions', function() {
    this.remainingYearsOnPlanet = testInput.remainingYearsOnPlanet();
    expect(testInput.remainingYearsOnPlanet).toEqual(22);
  });

  it('should return the amount of years lived past expectancy for each planet conditions', function() {
    this.yearsPastExpectancyOnPlanet = testInput.yearsPastExpectancyOnPlanet();
    expect(testInput.yearsPastExpectancyOnPlanet).toEqual(2);
  });
});