{
    let dieNumber = 1 + Math.floor(Math.random()*10)% 6;
    let dictionary = new Map();
    let count = 0;
    
    do{
        if(!dictionary.has(dieNumber)){
            dictionary.set(dieNumber, 1);
        }
        else{
            count = dictionary.get(dieNumber);
            dictionary.set(dieNumber, ++count);
        }
        if(count == 10) {
            console.log("Max count dice number "+ dieNumber+" count is "+ dictionary.get(dieNumber));
            break;
        }
        dieNumber = 1 + Math.floor(Math.random()*10)% 6;
    }while(true);
    let min = 11;
    let minDieNumber;
    for(let key of dictionary.keys()){
        if(dictionary.get(key) < min){
            min = dictionary.get(key);
            minDieNumber = key;
        }
    }
    console.log("Min die number "+ minDieNumber + " count is "+dictionary.get(minDieNumber));
}