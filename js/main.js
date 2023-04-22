let start_button = document.getElementById("start-button");
let reset_button = document.getElementById("reset-button");
let min_up_button = document.getElementById("min-up");
let min_down_button = document.getElementById("min-down");
let sec_up_button = document.getElementById("sec-up");
let sec_down_button = document.getElementById("sec-down");
let minute_time = document.getElementById("minute-time");
let second_time = document.getElementById("second-time");


let minute = 0;
let second = 0;
let timer;
let alarm = new Audio();
alarm.src = 'sounds/alarm.mp3';
alarm.loop = true;


min_up_button.addEventListener('click', function(e){
    if(minute<99) {
        minute++;
    }
    renderTime();
});
min_down_button.addEventListener('click', function(e){
    if(minute>0) {
        minute--;
    }
    renderTime();
});
sec_up_button.addEventListener('click', function(e){
    if(second<60) {
        second++;
    }
    renderTime();
});
sec_down_button.addEventListener('click', function(e){
    if(second>0) {
        second--;
    }
    renderTime();
});


start_button.addEventListener('click',function(e){
    document.querySelector(".colon").classList.add('timer-active');
    timer = setInterval(function(){
        if(runTimer()){
            alarm.play();
            document.querySelector(".colon").classList.remove('timer-active');
            document.querySelector(".digits").classList.add('shake');
            clearInterval(timer);
        }
        renderTime();
    },1000);
});

reset_button.addEventListener('click',function(e){
    clearInterval(timer);
    minute = 0;
    second = 0;
    renderTime();
    alarm.pause();
    document.querySelector(".digits").classList.remove('shake');
    document.querySelector(".colon").classList.remove('timer-active');
       
});


function runTimer(){
    if(second>0){
        second--;
    }else{
        if(minute==0){
            return true;
        }
        minute--;
        second=59;
    }

    return false;
}

function renderTime(){
    minute_time.innerHTML = minute <10? '0'+minute:minute;
    second_time.innerHTML = second <10? '0'+second:second;
}