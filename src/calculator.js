export class Calculator {
constructor(inputAge, oldAge, lifeExpectancy){
  this.age = inputAge;
  this.oldAge = oldAge;
  this.lifeExpectancy = lifeExpectancy;
}

mercuryYears() {
  this.mercuryAge = Math.floor(this.age / 24);
}
venusYears() {
  this.venusAge = Math.floor(this.age / 62);
}
marsYears() {
  this.marsAge = Math.floor(this.age / 1.88);
}
jupiterYears() {
  this.jupiterAge = Math.floor(this.age / 11.86);
}

testPlanetYears() {
  this.testPlanetYears =  this.age / 2;
}

remainingYears() {
   this.yearsRemaining = Math.floor(this.lifeExpectancy - this.age);
}

yearsPastExpectancy() {
 this.pastExpectancy = Math.floor(this.oldAge - this.lifeExpectancy);
}

remainingYearsOnPlanet() {
  this.remainingYearsOnPlanet = Math.floor((this.lifeExpectancy / 2) - (this.age / 2));
}

yearsPastExpectancyOnPlanet() {
  this.yearsPastExpectancyOnPlanet = Math.floor((this.oldAge / 2) - (this.lifeExpectancy / 2));
}

}