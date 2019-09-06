class Calculator {
constructor(inputAge){
  this.age = inputAge;
  this.lifeExpectancy = 75;
  this.yearsPastExpectancy;
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

}