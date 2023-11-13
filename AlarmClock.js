let mode_num = 0; //모드 변경을 위하여 선언한 모드 값
let move_num = 0;  //알람 모드에서 시, 분, 초를 바꾸기 위하여 선언한 모드 값

let h_num = 0;
let m_num = 0;
let s_num = 0;

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

    // document.getElementById("time").innerHTML = "&nbsp";
    document.getElementById("time").innerHTML = modifyNumber(h_num) + " : " + modifyNumber(m_num) + " : " + modifyNumber(s_num);
  }
  //Timer Mode
  else if(mode_num == 2) {
    document.getElementById("modeTitle").innerHTML = "Timer Mode";

    document.getElementById("time").innerHTML = "222222";
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

//작성중
//Up Button을 누르면 실행되는 함수, Clock Mode에서는 실행되지 않음, StopWatch Mode에서는 다르게 실행됨
function up_Button() {
  //Alarm mode
  if (mode_num == 1) {
    if (move_num == 0) {
      document.getElementById("time").innerHTML = modifyNumber(++h_num) + " : " + modifyNumber(m_num) + " : " + modifyNumber(s_num);
    }
    else if (move_num == 1) {
      if (m_num == 59) {
        h_num += 1;
        m_num = 0;
        document.getElementById("time").innerHTML = modifyNumber(h_num) + " : " + modifyNumber(m_num) + " : " + modifyNumber(s_num);
      }
      else {
        document.getElementById("time").innerHTML = modifyNumber(h_num) + " : " + modifyNumber(++m_num) + " : " + modifyNumber(s_num);
      }
    }
    else if (move_num == 2) {
      if (s_num == 59) {
        m_num += 1;
        s_num = 0;
        document.getElementById("time").innerHTML = modifyNumber(h_num) + " : " + modifyNumber(m_num) + " : " + modifyNumber(s_num);
      }
      else {
        document.getElementById("time").innerHTML = modifyNumber(h_num) + " : " + modifyNumber(m_num) + " : " + modifyNumber(++s_num);
      }
    }
  }
  //Timer Mode
  else if (mode_num == 2) {
    if (move_num == 0) {
      document.getElementById("time").innerHTML = modifyNumber(++h_num) + " : " + modifyNumber(m_num) + " : " + modifyNumber(s_num);
    }
    else if (move_num == 1) {
      if (m_num == 59) {
        h_num += 1;
        m_num = 0;
        document.getElementById("time").innerHTML = modifyNumber(h_num) + " : " + modifyNumber(m_num) + " : " + modifyNumber(s_num);
      }
      else {
        document.getElementById("time").innerHTML = modifyNumber(h_num) + " : " + modifyNumber(++m_num) + " : " + modifyNumber(s_num);
      }
    }
    else if (move_num == 2) {
      if (s_num == 59) {
        m_num += 1;
        s_num = 0;
        document.getElementById("time").innerHTML = modifyNumber(h_num) + " : " + modifyNumber(m_num) + " : " + modifyNumber(s_num);
      }
      else {
        document.getElementById("time").innerHTML = modifyNumber(h_num) + " : " + modifyNumber(m_num) + " : " + modifyNumber(++s_num);
      }
    }
  }
  //StopWatch Mode
  else if (mode_num == 3) {
    
  }
}

//작성중
//Down Button을 누르면 실행되는 함수, Clock Mode에서는 실행되지 않음, StopWatch Mode에서는 다르게 실행됨
function down_Button() {
  //Alarm Mode
  if (mode_num == 1) {
    if (move_num == 0) {
      if (h_num >= 1) {
        document.getElementById("time").innerHTML = modifyNumber(--h_num) + " : " + modifyNumber(m_num) + " : " + modifyNumber(s_num);
      }
    }
    else if (move_num == 1) {
      if (m_num == 0) {
        if (h_num >= 1) {
          h_num -= 1;
          m_num = 59;
          document.getElementById("time").innerHTML = modifyNumber(h_num) + " : " + modifyNumber(m_num) + " : " + modifyNumber(s_num);
        }
      }
      else {
        document.getElementById("time").innerHTML = modifyNumber(h_num) + " : " + modifyNumber(--m_num) + " : " + modifyNumber(s_num);
      }
    }
    else if (move_num == 2) {
      if (h_num >= 1) {
        if (m_num == 0) {
          if (s_num == 0) {
            h_num -= 1;
            m_num = 59;
            s_num = 59;
            document.getElementById("time").innerHTML = modifyNumber(h_num) + " : " + modifyNumber(m_num) + " : " + modifyNumber(s_num);
          }
          else {
            document.getElementById("time").innerHTML = modifyNumber(h_num) + " : " + modifyNumber(m_num) + " : " + modifyNumber(--s_num);
          }
        }
        else {
          if (s_num == 0) {
            m_num -= 1;
            s_num = 59;
            document.getElementById("time").innerHTML = modifyNumber(h_num) + " : " + modifyNumber(m_num) + " : " + modifyNumber(s_num);
          }
          else {
            document.getElementById("time").innerHTML = modifyNumber(h_num) + " : " + modifyNumber(m_num) + " : " + modifyNumber(--s_num);
          }
        }
      }
    }
  }
  //Timer Mode
  else if (mode_num == 2) {
    if (move_num == 0) {
      if (h_num >= 1) {
        document.getElementById("time").innerHTML = modifyNumber(--h_num) + " : " + modifyNumber(m_num) + " : " + modifyNumber(s_num);
      }
    }
    else if (move_num == 1) {
      if (m_num == 0) {
        if (h_num >= 1) {
          h_num -= 1;
          m_num = 59;
          document.getElementById("time").innerHTML = modifyNumber(h_num) + " : " + modifyNumber(m_num) + " : " + modifyNumber(s_num);
        }
        else {
          
        }
      }
      else {
        document.getElementById("time").innerHTML = modifyNumber(h_num) + " : " + modifyNumber(--m_num) + " : " + modifyNumber(s_num);
      }
    }
    else if (move_num == 2) {
      if (h_num >= 1) {
        if (s_num == 0) {
          if (m_num == 0) {
            h_num -= 1;
            m_num = 59;
            s_num = 59;
            document.getElementById("time").innerHTML = modifyNumber(h_num) + " : " + modifyNumber(m_num) + " : " + modifyNumber(s_num);
          }
          else {
            m_num -= 1;
            s_num = 59;
            document.getElementById("time").innerHTML = modifyNumber(h_num) + " : " + modifyNumber(m_num) + " : " + modifyNumber(s_num);
          }
        }
        else {
          document.getElementById("time").innerHTML = modifyNumber(h_num) + " : " + modifyNumber(m_num) + " : " + modifyNumber(--s_num);
        }
      }
    }
  }
  else if (mode_num == 3) {
    if (move_num == 0) {
      
    }
    else if (move_num == 1) {
      
    }
    else if (move_num == 2) {
      
    }
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

//숫자가 깜빡이는 함수 (작성중)
// async function num_blink() {
  
//   var hour_blink = "&nbsp&nbsp" + " : " + min + " : " + sec;
//   var minutes_blink = hour + " : " + "&nbsp&nbsp" + " : " + sec;
//   var seconds_blink = hour + " : " + min + " : " + "&nbsp&nbsp";

//   if(move_num == 0) {
//     document.getElementById("time").innerHTML = hour_blink;
//     await sleep(500);
//     document.getElementById("time").innerHTML = hour;
//     await sleep(500);

//     move_num += 1;
//   }
//   else if(move_num == 1) {
//     document.getElementById("time").innerHTML = hour_blink;
//     await sleep(500);
//     document.getElementById("time").innerHTML = hour;
//     await sleep(500);

//     move_num += 1;
//   }
//   else if(move_num == 2) {
//     document.getElementById("time").innerHTML = hour_blink;
//     await sleep(500);
//     document.getElementById("time").innerHTML = hour;
//     await sleep(500);

//     move_num = 0;
//   }
// }