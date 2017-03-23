function square(x){
  for(i=0; i<x.length; i++){
    x[i] *= x[i];
  }
};

console.log("Pre Function Call, X:", x);
square(x);
console.log("Post Fun")
