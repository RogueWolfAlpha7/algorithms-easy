function createOddArray1To255() {
  var y = [];
  for(i=1;i<=255;i++) {
    if(i%2 === 1) {
      //I could push this
      //y.push(i);
      //y[i] = i;
      y[y.length] = i;
    }
  }
  return y;
}

console.log("my function returned:", createOddArray1To255())
