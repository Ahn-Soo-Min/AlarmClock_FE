let mode_num = 0; //모드 변경을 위하여 선언한 모드 값
let move_num = 0;  //알람 모드에서 시, 분, 초를 바꾸기 위하여 선언한 모드 값

let h_num1 = 0;
let m_num1 = 0;
let s_num1 = 0;

let h_num2 = 0;
let m_num2 = 0;
let s_num2 = 0;

let alarm_value; //Set 버튼을 누를 때 시간 값을 저장하는 변수
let timer_value; //Set 버튼을 누를 때 시간 값을 저장하는 변수

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
  }
  //Alarm Mode
  else if(mode_num == 1) {
    document.getElementById("modeTitle").innerHTML = "Alarm Mode";

    clearInterval(interval);

    document.getElementById("time").innerHTML = modifyNumber(h_num1) + " : " + modifyNumber(m_num1) + " : " + modifyNumber(s_num1);
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

//Up Button을 누르면 실행되는 함수, Clock Mode에서는 실행되지 않음, StopWatch Mode에서는 다르게 실행됨
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
    
  }
}

//Down Button을 누르면 실행되는 함수, Clock Mode에서는 실행되지 않음, StopWatch Mode에서는 다르게 실행됨
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
    
  }
}

function set_Button() {
  //Alarm Mode
  if (mode_num == 1) {
    alarm_value = [h_num1, m_num1, s_num1];

  }
  //Timer Mode
  if (mode_num == 2) {
    timer_value = [h_num2, m_num2, s_num2];
  }
  //StopWatch Mode, Reset 버튼으로 취급
  if (mode_num == 3) {
    
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

//만일 시간의 값이 한 자리일 경우 십의 자리 숫자에 0을 넣는 함수
function modifyNumber(time) {
  if(parseInt(time) < 10){
    return "0" + time;
  }
  else{
    return time;
  }
}

//숫자가 깜빡이는 함수 (작성중)
// async function num_blink() {
  
//   var hour_blink = "&nbsp&nbsp" + " : " + min + " : " + sec;
//   var minutes_blink = hour + " : " + "&nbsp&nbsp" + " : " + sec;
//   var seconds_blink = hour + " : " + min + " : " + "&nbsp&nbsp";

//   if (mode_num == 1 || mode_num == 2) {
//     if (move_num == 0) {
//       document.getElementById("time").innerHTML = hour_blink;
//       await sleep(500);
//       document.getElementById("time").innerHTML = hour;
//       await sleep(500);

//       move_num += 1;
//     }
//     else if (move_num == 1) {
//       document.getElementById("time").innerHTML = hour_blink;
//       await sleep(500);
//       document.getElementById("time").innerHTML = hour;
//       await sleep(500);

//       move_num += 1;
//     }
//     else if (move_num == 2) {
//       document.getElementById("time").innerHTML = hour_blink;
//       await sleep(500);
//       document.getElementById("time").innerHTML = hour;
//       await sleep(500);

//       move_num = 0;
//     }
//   }
// }

function readFile() {
  let content = null;
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "C:\Users\Ahn SooMin\Desktop\AlarmClock_FE")
}

function writeFile(name, msg) {//name : 파일명, msg : 기록할 내용
  if (name == "") return false;
  var defaultPath = "C:\Users\Ahn SooMin\Desktop\AlarmClock_FE"
  var fileObject = new ActiveXObject("Scripting.FileSystemObject");
  var fullpath = defaultPath + "\\" + name;

  if (!fileObject.FileExists(fullpath)) {
    var fWrite = fileObject.CreateTextFile(fullpath, false);
    fWrite.write(msg);
    fWrite.close();
  }
  else {
    var fWrite = fileObject.OpenTextFile(fullpath, 8);
    fWrite.write(msg);
    fWrite.close();
  }
}