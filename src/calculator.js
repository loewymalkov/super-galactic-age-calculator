export class Calculator {
constructor(inputAge, oldAge, lifeExpectancy){
  this.age = inputAge;
  this.oldAge = oldAge;
  this.lifeExpectancy = lifeExpectancy;
}

mercuryYears() {
  return this.age / 24;
}
venusYears() {
  return this.age / 62;
}
marsYears() {
  return this.age / 1.88;
}
jupiterYears() {
  return this.age / 11.86;
}

testPlanetYears() {
  return this.age / 2;
}

remainingYears() {
  return this.lifeExpectancy - this.age;
}

yearsPastExpectancy() {
 return this.oldAge - this.lifeExpectancy;
}

remainingYearsOnPlanet() {
  return (this.lifeExpectancy / 2) - (this.age / 2);
}

yearsPastExpectancyOnPlanet() {
  return (this.oldAge / 2) - (this.lifeExpectancy / 2);
}

}