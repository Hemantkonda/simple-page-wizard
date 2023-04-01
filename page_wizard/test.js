console.log("start");
setTimeout(function f(){
    console.log("timer1");
  }, 100);

setTimeout(function f(){
  console.log("timer2");
}, 0);


console.log("End");

for (let i = 0; i <= 1000000000; i++) {
    if(i===1000000000){
        console.log("loop");
    }
}

