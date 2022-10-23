var x = 1;
while (x<=20) {
    let name = "";
    if((x%3)===0 && (x%5)!==0){
        name = "Julia";
        return name
    }
    else if((x%5)===0 && (x%3)!==0){
        name = "James";
        return name
    }else if((x%3)===0&&(x%5)===0){
        name ="JuliaJames";
        return name
    }
    console.log(name);
    x = x+1;
}