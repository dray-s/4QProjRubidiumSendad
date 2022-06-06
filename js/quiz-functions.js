// Make sure the wrong options are different from the correct one
			
function checkForCorrectWrongs(x) {
	for (a in x) {
		if (x[a] == correctAnswer) x[a] = Math.abs(correctAnswer + (Math.floor(Math.random() * 80) - 40))
	}
	if (x[0] == correctAnswer || x[1] == correctAnswer || x[2] == correctAnswer) checkForCorrectWrongs(x);
}

// Collect the answer from input
			
function answer() {
	switch (inputKind) {
		case 0:
			ans = document.getElementById("ans").value;
			break;
		case 1:
			ans = "";
			radioAnswers = document.getElementsByName("ans-radio");
			for (i in radioAnswers) {
				if (radioAnswers[i].checked) ans = radioAnswers[i].value;
			}
			break;
		case 2:
			switch (blanker) {
				case 1:
					ans = document.getElementById("ansb1").value;
					break;
				case 2:
					ans = document.getElementById("ansb2").value;
					break;
				case 3:
					ans = document.getElementById("ansb3").value;
					break;
			}
			break;
	}
				
	if (ans.length == 0) document.getElementById("checker").innerHTML = "No answer has been submitted!";
	else checkAnswer();
}

// Timer

function startTimer(n) {
	timerEnd = new Date(new Date().getTime() + n);
	updateTimer();
}

// Update clock
	
function updateTimer() {
	document.getElementById("timeCount").innerHTML = Math.floor((timerEnd - new Date()) / 1000) + "<span style='font-size:21px'>." + (timerEnd - new Date()) % 1000 + "</span> seconds left";
	if ((timerEnd - new Date()) >= 0) setTimeout(updateTimer, 10);
	else endGame();
}
			
// Run when time runs out
			
function endGame() {
	document.getElementById("ans").value = 
	document.getElementById("ansb1").value = 
	document.getElementById("ansb2").value = 
	document.getElementById("ansb3").value = "";
				
	document.getElementById("ans").disabled = 
	document.getElementById("ansr1").disabled = 
	document.getElementById("ansr2").disabled = 
	document.getElementById("ansr3").disabled = 
	document.getElementById("ansr4").disabled = 
	document.getElementById("ansb1").disabled = 
	document.getElementById("ansb2").disabled = 
	document.getElementById("ansb3").disabled = 
	document.getElementById("submit").disabled = 
	document.getElementById("reset").disabled = true;
				
	document.getElementById("timeCount").innerHTML = "Time is up!";
}

// Input border colors
			
function blankInput(elem) {
	if (elem.value.length == 0) elem.style.borderColor = "#ff3825";
	else elem.style.borderColor = "#4bff31";
}
			
function highlightedInput(elem) {
	elem.style.borderColor = "#ffc600";
}
			
// Back to home
			
function sendHome() {
	location.href = '../index.html';
}

// Check if the user has entered a name

function checkForUsername() {
	if (document.cookie.match("username=") == null) window.location.assign("../index.html");
	else document.getElementById("legendName").innerHTML = getName(); 
}

// Extract Cookie Username Value

function getName() {
  nameFind = "username=";
  cArr = decodeURIComponent(document.cookie).split(';');
  for(i in cArr) {
    cFind = cArr[i];
    while (cFind.charAt(0) == ' ') {
      cFind = cFind.substring(1);
    }
    if (cFind.indexOf(nameFind) == 0) {
      return cFind.substring(nameFind.length, cFind.length);
    }
  }
  return "";
}
