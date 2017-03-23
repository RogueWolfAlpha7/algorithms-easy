function maxValue(inputArray) {
  var max = inputArray[0];
  for(i=1;i < inputArray.length;i++) {
    if(max < inputArray[i]) {
      max = inputArray[i];
    }
  }
  console.log("maximun # is:",max)
}

maxValue(3,5,45,67,78,22)
