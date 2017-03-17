function forLoop(testArray=[]){
  for (i=0;i<25;i++){
    if (i==1){
      testArray.push(i);
    } else {
      testArray.push(i)
    }
  }
  return testArray;
}

function whileLoop(n){
  while (n>0){
    console.log(n);
    n--;
  }
    return "done";
}

function doWhileLoop(array){
  function maybeTrue() {
    return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
  }
  do{
    array= array.slice(1);
  } while (array.length >= 0 && maybeTrue())
    return array;
}
