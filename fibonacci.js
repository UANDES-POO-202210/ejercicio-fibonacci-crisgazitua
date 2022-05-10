fs=require("fs")

function Fibonacci(lim){
    const Fn = [0,1];
    for(let n=2; n<lim; n++){
        Fn[n] = Fn[n-1] + Fn[n-2];
    }
    return Fn[n];
}

fs.readfile("number.txt", "utf8", function(err, data){
    if(err){
        return console.error(err);
    }
    else{
        console.log(data, Fibonacci(lim));
    }
});