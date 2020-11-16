{
    let i = 0;
    let day, month, year;
    let dictionary = new Map();
    let name;
    for(; i < 50; i++){
        day = 1 + Math.floor(Math.random() *100) % 30;
        month = 1 + Math.floor(Math.random()*10)% 12;
        year = 1990 + Math.floor(Math.random()*10) % 10;
        name = "abb"+i;
        dictionary.set(name, new Date(year, month, day));
    }

    console.log(dictionary);
    console.log(dictionary.get("abb42").getFullYear());
    
    for( let key in dictionary.keys()){
        let date  = dictionary.get(key);
        console.log(date.getFullYear());
        if(date.getFullYear() == 1992 || date.getFullYear() == 1993)
            console.log("Date of birth in 1992 and 1993: "+key);
    }
       
}