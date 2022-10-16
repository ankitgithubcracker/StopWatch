let [msec,sec,min,hrs]=[0,0,0,0]
let int = null;
let timer = document.querySelector('.timerDisplay');
let pause = document.querySelector('#pauseTimer');
let start = document.querySelector('#startTimer');
let reset = document.querySelector('#resetTimer');

start.addEventListener('click',()=>{
    
    int = setInterval(displayTimer,10);
    
})

pause.addEventListener('click',()=>{
    clearInterval(int);
})

reset.addEventListener('click',()=>{
    clearInterval(int);
    [msec,sec,min,hrs]=[0,0,0,0]
    timer.innerHTML = "00 : 00 : 00 : 000";
})

function displayTimer(){
    msec +=10;
    if(msec == 1000){
        msec = 0;
        sec++;
    }
    if(sec == 60){
        sec = 0;
        min++;
    }
    if(min == 60){
        min =0;
        hrs++;
    }
   
   
   
    //let h = hrs < 10 ? hrs = "0"+ hrs : hrs ;
    if(hrs <10){
        h = "0" + hrs;
    }else{
        h= hrs;
    }
    // let m = min < 10 ? min = "0"+ min : min ;
    if(min <10){
        m = "0" + min;
    }else{
        m= min;
    }

    // let s = sec < 10 ? sec = "0"+ sec : sec ;
    if(sec <10){
        s = "0" + sec;
    }else{
        s= sec;
    }


    if(msec < 10){
        ms = "00" + msec;
    }else if(msec < 100){
        ms = "0" + msec;
        
    }else{
        ms = msec;
    }

    timer.innerHTML = `${h} : ${m} : ${s} : ${ms} ` ;
}
