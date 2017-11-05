exports.getRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (Math.floor(Math.random() * (max - min + 1)) + min)/100; //The maximum is inclusive and the minimum is inclusive
}
