let num = 99;

while (num > 2 /* your stop condition goes here */) {
    // check value of num
    console.log(num+" bottles of juice on the wall! "+num+" bottles of juice! Take one down, pass it around\... "+(num-1)+" bottles of juice on the wall!")
    num=num-1
    return num
}
if (num===2){
    console.log(num+" bottles of juice on the wall! "+num+" bottles of juice! Take one down, pass it around\... "+(num-1)+" bottle of juice on the wall!")
    num=num-1
    return num
}else if(num===1){
    console.log(num+" bottle of juice on the wall! "+num+" bottle of juice! Take one down, pass it around\... "+(num-1)+" bottles of juice on the wall!")
    num=num-1
    return num
}