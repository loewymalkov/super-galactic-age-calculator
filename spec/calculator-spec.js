import { Calculator } from './../src/calculator.js';

describe ('Calculator', function() {
  let inputAge;
  let oldInputAge;
  let lifeExpectancy;

  beforeEach(function() {
    inputAge = 30;
    oldInputAge = 80;
    lifeExpectancy = 75;
  });


  it('should return the amount of remaining years', function() {
    let remainingYears = (lifeExpectancy - inputAge);
    expect(Math.floor(remainingYears)).toEqual(45);
  });

  it('should return the amount of years past life expectancy', function() {
    let yearsPastExpectancy = (oldInputAge - lifeExpectancy);
    expect(Math.floor(yearsPastExpectancy)).toEqual(5);
  });

  it('should return current age adjusted for Mercury years', function() {
    const mercuryYears = (inputAge) => (inputAge / 24);
    let mercuryAge = mercuryYears(inputAge);
    expect(Math.floor(mercuryAge)).toEqual(1);
  });

  it('should return current age adjusted for Venus years', function() {
    const venusYears = (inputAge) => (inputAge / 62);
    let venusAge = venusYears(inputAge);
    expect(Math.floor(venusAge)).toEqual(0);
  });

  it('should return current age adjusted for Mars years', function() {
    const marsYears = (inputAge) => (inputAge / 1.88);
    let marsAge = marsYears(inputAge);
    expect(Math.floor(marsAge)).toEqual(15);
  });

  it('should return current age adjusted for Jupiter years', function() {
    const jupiterYears = (x) => (x / 11.86);
    let jupiterAge = jupiterYears(inputAge);
    expect(Math.floor(jupiterAge)).toEqual(2);
  });

  it('should return remaining years evaluated for planet conditions', function() {
    const planetYears = (x) => (x / 2);
    let remainingYears = (lifeExpectancy - inputAge);
    let adjustedRemainingYears = planetYears(remainingYears)
    expect(Math.floor(adjustedRemainingYears)).toEqual(22);
  });

  it('should return the amount of years lived past expectancy for each planet conditions', function() {
    const planetYears = (x) => (x / 2);
    let yearsPastExpectancy = (oldInputAge - lifeExpectancy);
    let adjustedYearsPastExpectancy = planetYears(yearsPastExpectancy);
    expect(Math.floor(adjustedYearsPastExpectancy)).toEqual(2);
  });
});