{
 // find largest and smallest from given array of three random numbers
 
 // store three random three digit numbers
 let num1 = 100 + Math.floor(Math.random()*1000)%100;
 let num = [num1];
 for(let i = 1 ; i <= 2 ; i++)
    num[i] = Math.floor(Math.random()*1000);
 console.log(num);

 // Finding second maximum and second minimum
 let max = num[0];
 let min = num[0];
 for(let n in num){
    if( num[n] > max)
        max = num[n];
    if(num[n] < min)
        min = num[n];
}

 console.log("maximum and minimum: "+max+" "+min);
 let secondMax = 0;
 let secondMin = num[0];

 for(let n in num){
     if(secondMax < num[n] && (num[n] != max))
        secondMax = num[n];
     if(secondMin > num[n] && (num[n] != min))
        secondMin = num[n];
 }
   console.log("Second maximum and second minimum: "+secondMax+" "+secondMin);

 // sorting array
 let sortedArray = num.slice(0).sort();
 console.log("Second maximum and second minimum: "+sortedArray[1]);
}