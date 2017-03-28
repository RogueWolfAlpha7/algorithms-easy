function rFactorial(num){
  if(num<0){
    return 0;
  }
  if(num === 1){
  return 1;
  }
  return num * rFactorial(num-1);
}
console.log(rFactorial(5));
