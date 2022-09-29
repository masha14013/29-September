function multiply(number){
  let a = number.toString();
  a = (a[0] == "-") ? a.length - 1 : a.length;
  return number * Math.pow(5, a);
}