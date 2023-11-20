let mode_num = 0; //모드 변경을 위하여 선언한 모드 값
let move_num = 0;  //알람 모드에서 시, 분, 초를 바꾸기 위하여 선언한 모드 값

//Alarm Mode에서 사용하는 변수 값들
let h_num1 = 0;
let m_num1 = 0;
let s_num1 = 0;

//Timer Mode에서 사용하는 변수 값들
let h_num2 = 0;
let m_num2 = 0;
let s_num2 = 0;

let alarm_value; //Set 버튼을 누를 때 시간 값을 저장하는 변수
let timer_value; //Set 버튼을 누를 때 시간 값을 저장하는 변수

//Date() 함수를 불러오기
let dateInfo = new Date();

//연, 월, 일 불러오기
let year = dateInfo.getFullYear();
let month = dateInfo.getMonth() + 1;
let date = dateInfo.getDate();

//시간, 분, 초를 modifyNumber() 함수로 무조건 2자리로 불러오기
let hour = modifyNumber(dateInfo.getHours());
let min = modifyNumber(dateInfo.getMinutes());
let sec = modifyNumber(dateInfo.getSeconds());

//Timer Mode에서 사용하는 변수들
let timerId;
let time = 0;
let stopwatch;
let swhour, swmin, swsec;

let timer;
let targetTime;
let timerState = true;

//페이지가 로드 될 때 실행되는 함수
window.onload =function(){
  setDate();
  setTime();
  stopwatch = document.getElementById("time");
}

//setTime() 함수를 0.01초 마다 실행되게 하는 함수
var interval = setInterval(setTime, 10);

//MODE 버튼을 누를 때 마다 실행되는 함수, 0~3까지의 값을 가진다.(mode_num)
function mode_Button(){
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

    document.getElementById("button_2").setAttribute("value", "    ");
    document.getElementById("button_3").setAttribute("value", "    ");
    document.getElementById("button_4").setAttribute("value", "    ");
    document.getElementById("button_5").setAttribute("value", "    ");
  }
  //Alarm Mode
  else if(mode_num == 1) {
    document.getElementById("modeTitle").innerHTML = "Alarm Mode";

    clearInterval(interval);

    document.getElementById("time").innerHTML = modifyNumber(h_num1) + " : " + modifyNumber(m_num1) + " : " + modifyNumber(s_num1);

    document.getElementById("button_2").setAttribute("value", "MOVE");
    document.getElementById("button_3").setAttribute("value", "SET");
    document.getElementById("button_4").setAttribute("value", "UP");
    document.getElementById("button_5").setAttribute("value", "DOWN");
  }
  //Timer Mode
  else if(mode_num == 2) {
    document.getElementById("modeTitle").innerHTML = "Timer Mode";

    document.getElementById("time").innerHTML = modifyNumber(h_num2) + " : " + modifyNumber(m_num2) + " : " + modifyNumber(s_num2);
  }
  //StopWatch Mode
  else if(mode_num == 3) {
    document.getElementById("modeTitle").innerHTML = "StopWatch Mode";

    document.getElementById("time").innerHTML = "00 : 00 : 00";
    document.getElementById("button_2").setAttribute("value", "     ")
    document.getElementById("button_3").setAttribute("value", "RESET");
    document.getElementById("button_4").setAttribute("value", "START");
    document.getElementById("button_5").setAttribute("value", "STOP");
  }

  move_num = 0;
}

//Move Button을 누르면 실행되는 함수, 시분초의 위치를 옮겨 다니는 기능(move_num)
function move_Button() {
  if (move_num >= 2) {
    move_num = 0;
  }
  else {
    move_num += 1;
  }
}

//Up Button을 누르면 실행되는 함수, Clock Mode에서는 실행되지 않음, StopWatch Mode에서는 Start 버튼임
function up_Button() {
  //Alarm Mode
  if (mode_num == 1) {
    if (move_num == 0) {
      h_num1 += 1;
      document.getElementById("time").innerHTML = modifyNumber(h_num1) + " : " + modifyNumber(m_num1) + " : " + modifyNumber(s_num1);
    }
    if (move_num == 1) {
      if (m_num1 == 59) {
        h_num1 += 1;
        m_num1 -= 59; 
        document.getElementById("time").innerHTML = modifyNumber(h_num1) + " : " + modifyNumber(m_num1) + " : " + modifyNumber(s_num1);
      }
      else {
        m_num1 += 1;
        document.getElementById("time").innerHTML = modifyNumber(h_num1) + " : " + modifyNumber(m_num1) + " : " + modifyNumber(s_num1);
      }
    }
    if (move_num == 2) {
      if (s_num1 == 59) {
        if (m_num1 == 59) {
          h_num1 += 1;
          m_num1 -= 59;
          s_num1 -= 59;
          document.getElementById("time").innerHTML = modifyNumber(h_num1) + " : " + modifyNumber(m_num1) + " : " + modifyNumber(s_num1);
        }
        else {
          m_num1 += 1;
          s_num1 -= 59;
          document.getElementById("time").innerHTML = modifyNumber(h_num1) + " : " + modifyNumber(m_num1) + " : " + modifyNumber(s_num1);
        }
      }
      else {
        s_num1 += 1;
        document.getElementById("time").innerHTML = modifyNumber(h_num1) + " : " + modifyNumber(m_num1) + " : " + modifyNumber(s_num1);
      }
    }
  }
  //Timer Mode
  if (mode_num == 2) {
    if (move_num == 0) {
      h_num2 += 1;
      document.getElementById("time").innerHTML = modifyNumber(h_num2) + " : " + modifyNumber(m_num2) + " : " + modifyNumber(s_num2);
    }
    if (move_num == 1) {
      if (m_num2 == 59) {
        h_num2 += 1;
        m_num2 -= 59; 
        document.getElementById("time").innerHTML = modifyNumber(h_num2) + " : " + modifyNumber(m_num2) + " : " + modifyNumber(s_num2);
      }
      else {
        m_num2 += 1;
        document.getElementById("time").innerHTML = modifyNumber(h_num2) + " : " + modifyNumber(m_num2) + " : " + modifyNumber(s_num2);
      }
    }
    if (move_num == 2) {
      if (s_num2 == 59) {
        if (m_num2 == 59) {
          h_num2 += 1;
          m_num2 -= 59;
          s_num2 -= 59;
          document.getElementById("time").innerHTML = modifyNumber(h_num2) + " : " + modifyNumber(m_num2) + " : " + modifyNumber(s_num2);
        }
        else {
          m_num2 += 1;
          s_num2 -= 59;
          document.getElementById("time").innerHTML = modifyNumber(h_num2) + " : " + modifyNumber(m_num2) + " : " + modifyNumber(s_num2);
        }
      }
      else {
        s_num2 += 1;
        document.getElementById("time").innerHTML = modifyNumber(h_num2) + " : " + modifyNumber(m_num2) + " : " + modifyNumber(s_num2);
      }
    }
  }
  //StopWatch Mode, Start 버튼으로 취급됨
  if (mode_num == 3) {
    startClock();
  }
}

//Down Button을 누르면 실행되는 함수, Clock Mode에서는 실행되지 않음, StopWatch Mode에서는 Stop 버튼임
function down_Button() {
  //Alarm Mode
  if (mode_num == 1) {
    if (move_num == 0) {
      if (h_num1 > 0) {
        h_num1 -= 1;
        document.getElementById("time").innerHTML = modifyNumber(h_num1) + " : " + modifyNumber(m_num1) + " : " + modifyNumber(s_num1);
      }
    }
    if (move_num == 1) {
      if (m_num1 == 0) {
        if (h_num1 > 0) {
          h_num1 -= 1;
          m_num1 += 59;
          document.getElementById("time").innerHTML = modifyNumber(h_num1) + " : " + modifyNumber(m_num1) + " : " + modifyNumber(s_num1);
        }
      }
      else {
        m_num1 -= 1;
        document.getElementById("time").innerHTML = modifyNumber(h_num1) + " : " + modifyNumber(m_num1) + " : " + modifyNumber(s_num1);
      }
    }
    if (move_num == 2) {
      if (s_num1 == 0) {
        if (m_num1 == 0) {
          if (h_num1 > 0) {
            h_num1 -= 1;
            m_num1 += 59;
            s_num1 += 59;
            document.getElementById("time").innerHTML = modifyNumber(h_num1) + " : " + modifyNumber(m_num1) + " : " + modifyNumber(s_num1);
          }
        }
        else {
          m_num1 -= 1;
          s_num1 += 59;
          document.getElementById("time").innerHTML = modifyNumber(h_num1) + " : " + modifyNumber(m_num1) + " : " + modifyNumber(s_num1);
        }
      }
      else {
        s_num1 -= 1;
        document.getElementById("time").innerHTML = modifyNumber(h_num1) + " : " + modifyNumber(m_num1) + " : " + modifyNumber(s_num1);
      }
    }
  }
  //Timer Mode
  if (mode_num == 2) {
    if (move_num == 0) {
      if (h_num2 > 0) {
        h_num2 -= 1;
        document.getElementById("time").innerHTML = modifyNumber(h_num2) + " : " + modifyNumber(m_num2) + " : " + modifyNumber(s_num2);
      }
    }
    if (move_num == 1) {
      if (m_num2 == 0) {
        if (h_num2 > 0) {
          h_num2 -= 1;
          m_num2 += 59;
          document.getElementById("time").innerHTML = modifyNumber(h_num2) + " : " + modifyNumber(m_num2) + " : " + modifyNumber(s_num2);
        }
      }
      else {
        m_num2 -= 1;
        document.getElementById("time").innerHTML = modifyNumber(h_num2) + " : " + modifyNumber(m_num2) + " : " + modifyNumber(s_num2);
      }
    }
    if (move_num == 2) {
      if (s_num2 == 0) {
        if (m_num2 == 0) {
          if (h_num2 > 0) {
            h_num2 -= 1;
            m_num2 += 59;
            s_num2 += 59;
            document.getElementById("time").innerHTML = modifyNumber(h_num2) + " : " + modifyNumber(m_num2) + " : " + modifyNumber(s_num2);
          }
        }
        else {
          m_num2 -= 1;
          s_num2 += 59;
          document.getElementById("time").innerHTML = modifyNumber(h_num2) + " : " + modifyNumber(m_num2) + " : " + modifyNumber(s_num2);
        }
      }
      else {
        s_num2 -= 1;
        document.getElementById("time").innerHTML = modifyNumber(h_num2) + " : " + modifyNumber(m_num2) + " : " + modifyNumber(s_num2);
      }
    }
  }
  //StopWatch Mode, Stop 버튼으로 취급
  if (mode_num == 3) {
    stopClock();
  }
}

//Set Button을 누르면 실행되는 함수, Clock Mode에서는 실행되지 않음, StopWatch Mode에서는 Reset 버튼임
function set_Button() {
  //Alarm Mode
  if (mode_num == 1) {
    init_Alarm();
  }
  //Timer Mode
  if (mode_num == 2) {
    timerState = true;
    targetTime = (h_num2 * 3600) + (m_num2 * 60) + s_num2;
    init_Timer();
  }
  //StopWatch Mode, Reset 버튼으로 취급
  if (mode_num == 3) {
    resetClock();
  }
}

// <-------Clock Mode 기능------->

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

//만일 시간의 값이 한 자리일 경우 십의 자리 숫자에 0을 넣는 함수
function modifyNumber(time) {
  if(parseInt(time) < 10){
    return "0" + time;
  }
  else{
    return time;
  }
}

// <-------Timer Mode 기능------->

//StopWatch Mode에서 time 태그에 들어가는 시간을 출력하는 함수
function printTime() {
  time++;
  document.getElementById("time").innerText = getTimeFormatString();
}

//시계 시작 - 재귀호출로 반복실행
function startClock() {
  printTime();
  stopClock();
  timerId = setTimeout(startClock, 1000);
}

//시계 중지
function stopClock() {
  if (timerId != null) {
    clearTimeout(timerId);
  }
}

// 시계 초기화
function resetClock() {
  stopClock()
  document.getElementById("time").innerHTML = "00 : 00 : 00";
  time = 0;
}

// 시간(int)을 시, 분, 초 문자열로 변환
function getTimeFormatString() {
  swhour = parseInt(String(time / (60 * 60)));
  swmin = parseInt(String((time - (swhour * 60 * 60)) / 60));
  swsec = time % 60;

  return String(swhour).padStart(2, '0') + " : " + String(swmin).padStart(2, '0') + " : " + String(swsec).padStart(2, '0');
}

// <-------Alarm Mode 기능-------->

// 재귀 호출로 1초마다 setInterval() 함수를 반복해서 실행
function init_Alarm() {
  setInterval(getAlarm, 1000);
  alarm = setInterval(getAlarm, 1000);
}

// 목표로 한 시간의 값을 받아오고 현재 시간과 같다면 popup.html을 새로운 창에서 열리게 함
function getAlarm() {
  let setValue = modifyNumber(h_num1) + " : " + modifyNumber(m_num1) + " : " + modifyNumber(s_num1);
  //console.log(setValue);
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  let currentTime = modifyNumber(hours) + " : " + modifyNumber(minutes) + " : " + modifyNumber(seconds);
  //console.log(currentTime);

  if (currentTime == setValue) {
    window.open('popup.html');
    clearInterval(alarm);
  }
}

// <-------Timer Mode 기능------->

// 재귀 호출로 1초마다 init_Timer() 함수를 반복해서 실행하고 타이머가 다 되면 재귀 호출을 종료시킴
function init_Timer() {
  getTimer();
  stopTimer();
  timer = setTimeout(init_Timer, 1000);
  if (timerState == false) {
    clearInterval(timer);
  }
}

// 타이머를 종료시키는 함수
function stopTimer() {
  if (timer != null) {
    clearTimeout(timer);
  }
}

// 입력 받은 시간이 총 몇 초인지 계산하고 1초씩 줄어들게 함, 0초가 되었을 경우 popup.html이 뜨게 함
function getTimer() {
  targetTime--;

  const remainHours = parseInt(String(targetTime / 3600));
  const remainMinutes = parseInt(String((targetTime - (remainHours * 3600)) / 60));
  const remainSeconds = parseInt(String(targetTime % 60));

  document.getElementById("time").innerHTML = modifyNumber(remainHours) + " : " + modifyNumber(remainMinutes) + " : " + modifyNumber(remainSeconds);

  if (targetTime == 0) {
    window.open('popup.html');
    timerState = false;
    document.getElementById("time").innerHTML = "00 : 00 : 00";
    h_num2 = 0;
    m_num2 = 0;
    s_num2 = 0;
  }
} 