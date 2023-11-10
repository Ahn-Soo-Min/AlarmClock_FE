let mode_num = 0; //모드 변경을 위하여 선언한 모드 값
let alarm_num = 0;  //알람 모드에서 시, 분, 초를 바꾸기 위하여 선언한 모드 값

let dateInfo = new Date();

let year = dateInfo.getFullYear();
let month = dateInfo.getMonth() + 1;
let date = dateInfo.getDate();

let hour = modifyNumber(dateInfo.getHours());
let min = modifyNumber(dateInfo.getMinutes());
let sec = modifyNumber(dateInfo.getSeconds());

//페이지가 로드 될 때 실행되는 함수
window.onload =function(){
  setDate();
  setTime();
}

//setTime() 함수를 0.01초 마다 실행되게 하는 함수
var interval = setInterval(setTime, 10);

//MODE 버튼을 누를 때 마다 실행되는 함수, 0~3까지의 값을 가진다.(mode_num)
function changeMode(){
  //0 : Clock Mode, 1 : Alarm Mode, 2 : Timer Mode, 3 : Stop Watch Mode, 숫자가 3을 넘으면 0으로 초기화
  if(mode_num >= 3){
    mode_num = 0;
  }
  else{
    mode_num += 1;
  }
  
  //mode_num의 값에 따라 바뀌는 모드에서 실행되는 함수들
  //Clock Mode
  if(mode_num == 0) {
    document.getElementById("modeTitle").innerHTML = "Clock Mode";

    setTime();
    interval = setInterval(setTime, 10);
  }
  //Alarm Mode
  else if(mode_num == 1) {
    document.getElementById("modeTitle").innerHTML = "Alarm Mode";

    clearInterval(interval);

    document.getElementById("time").innerHTML = "&nbsp";
  }
  //Timer Mode
  else if(mode_num == 2) {
    document.getElementById("modeTitle").innerHTML = "Timer Mode";

    document.getElementById("time").innerHTML = "222222";
  }
  //StopWatch Mode
  else if(mode_num == 3) {
    document.getElementById("modeTitle").innerHTML = "StopWatch Mode";

    document.getElementById("time").innerHTML = "333333";
  }
}

//Date() 함수에서 날짜를 가져오는 함수
function setDate(){
  let dateInfo = new Date();
  
  let year = dateInfo.getFullYear();
  let month = dateInfo.getMonth() + 1;
  let date = dateInfo.getDate();

  document.getElementById("date").innerHTML = year + "년 " + month + "월 " + date + "일";
}

//Date() 함수에서 시간을 가져오는 함수
function setTime(){
  let dateInfo = new Date();

  let hour = modifyNumber(dateInfo.getHours());
  let min = modifyNumber(dateInfo.getMinutes());
  let sec = modifyNumber(dateInfo.getSeconds());

  document.getElementById("time").innerHTML = hour + " : " + min + " : " + sec;
}

//만일 시간의 값이 한 자리일 경우 십의 자리 숫자에 0을 넣음
function modifyNumber(time) {
  if(parseInt(time) < 10){
    return "0" + time;
  }
  else{
    return time;
  }
}

//작성중
function setAlarm(){
  var hour_blink = "&nbsp&nbsp" + " : " + min + " : " + sec;
  var minutes_blink = hour + " : " + "&nbsp&nbsp" + " : " + sec;
  var seconds_blink = hour + " : " + min + " : " + "&nbsp&nbsp";

  if(alarm_num == 0) {
    
  }
}