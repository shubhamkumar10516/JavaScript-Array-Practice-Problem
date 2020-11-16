{
    // storing prime factorization in array
   // function to find prime number
    function isPrime(n){
        
        for(let i = 2 ; i*i <= n ; i++)
           if( n % i == 0)
               return false;
        return true;
    }

    let num = 24;
    let arr = [];
    let j = 0;
    for(let i = 2 ; i < num ; i++)
       if( isPrime(i)){
           if(num % i == 0)
              arr[j++] = i;
       }
    console.log(arr);
}