let str = "";
let usedSpaces = [];
for(let i = 0; i < 50; i++){
    let line = "";
    
    let rand;
    let count = 0;
    do{
        rand = Math.floor(Math.random()*50);
        count++;
    } while(usedSpaces.includes(rand) || count < 1000);
    
    for(let i = 0; i < 50; i++){
        if(i == rand){
            line+="#";
            usedSpaces.push(rand);
        } else {
            line+="-";
        }
    }
    line+="\n";
    str+=line;
}
console.log(str);