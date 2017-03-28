function arrayContains(arr,val){
  return rBinSearch(arr,val,0,arr.length);
}
//base cases: a) found it, b) bookends met
//else: fwd prog = moving our bookends in.
function rBinSearch(arr,val,start,end) {

  if(start>=end || val<arr[start] || val > arr[end-1]) {
    return false;
  }//didnt't find it

  var mid = parseInt((start + end)/2);
  if(arr[mid] === val){
    return true;
  }//found it
}
