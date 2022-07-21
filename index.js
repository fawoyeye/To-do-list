

var name = prompt("Enter your name");

var dayParagraph = document.querySelector(".day");
var time = document.querySelector(".time");
var date = new Date();
var day = date.getDay();
var minute =date.getMinutes();
if(minute<10){minute = `0${minute}`};
var currentHour = date.getHours();
var hourForTime = date.getHours();
if(hourForTime>12){hourForTime-=12};
var add =`${hourForTime}:${minute}`
switch(day){
				case 1: dayParagraph.innerHTML="Motivational Monday";
				break;
					case 2: dayParagraph.innerHTML="To-do list Tuesday";
				break;
					case 3: dayParagraph.innerHTML="Working my ass out Wednesday";
				break;
					case 4: dayParagraph.innerHTML="Turning up Thurday";
				break;
					case 5: dayParagraph.innerHTML="Fry the work Friday";
				break;
					case 6: dayParagraph.innerHTML="Sit up Saturday";
				break;
					case 7: dayParagraph.innerHTML="Till sun down Sunday";
				break;
				default: "Welcome";}
			
			
			switch(currentHour){
							case 24: case 23: case 1: case 2: case 3: case 4: case 5: time.innerHTML =`It's ${add}, You are awake working? Welldone ${name}`;
		break;
		case 6: case 7: case 8: case 9: case 10: case 11: case 12: time.innerHTML =`It's ${add}, Good Morning ${name}!`;
		break;
		case 13: case 14: case 15: case 16: time.innerHTML =`It's ${add}, Good Afternoon ${name}`;
		break;
case 17: case 18: case 19: case 20: case 21: case 22: time.innerHTML =`It's ${add}, Good Evening ${name}`;
		break;
	default: "What time is it?";	
		
		
		
			}
			
			
			
			
			
			
			
