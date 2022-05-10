fs=require("fs")

function Fibonacci(lim){
    const F = [0,1];
    for(let n=2; n<lim; n++){
        F[n] = F[n-1] + F[n-2];
    }
    return F[n];
}

fs.readfile("number.txt", "utf8", function(err, data){
    if(err){
        return console.error(err);
    }
    else{
        console.log(data, Fibonacci(lim));
    }
});