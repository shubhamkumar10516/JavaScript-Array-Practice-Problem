{
  // sum of three numbers to zero
  function sumToZero(a,b,c){
      if(a + b + c == 0)
        return true;
      return false;
  }

  let arr = [4,6,-1,-3,0,7];

  for(let i = 0 ; i <= arr.length-3; i++){
      for(let j = i+1; j <= arr.length-2 ; j++)
         for(let k = j+1 ; k <= arr.length-1 ; k++)
               if(sumToZero(arr[i], arr[j], arr[k]))
                   {
                       console.log(arr[i]+" "+arr[j]+ " "+arr[k]+ " sums to zero");
                       break;
                   }
  }
}