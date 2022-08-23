var quotes = ["If you don't know where you are going, you will probably end up somewhere else. –Lawrence J. Peter","Shoot for the moon. Even if you miss, you'll land among the stars. –Les Brown","Never quit. It is the easiest cop-out in the world. Set a goal and don't quit until you attain it. When you do attain it, set another goal, and don't quit until you reach it. Never quit. –Bear Bryant","A goal is not always meant to be reached; it often serves simply as something to aim at. –Bruce Lee","The great danger for most of us lies not in setting our aim too high and falling short; but in setting our aim too low, and achieving our mark. –Michelangelo","If you aim at nothing, you will hit it every time. –Zig Ziglar","The only limit to the height of your achievements is the reach of your dreams and your willingness to work for them.– Michelle Obama","Setting goals is the first step in turning the invisible into the visible. – Tony Robbins","You measure the size of the accomplishment by the obstacles you have to overcome to reach your goals. - Booker T. Washington","Never give up. Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshine. - Jack Ma"];

window.onload = function newQuote(){
var num = Math.floor(Math.random() * (quotes.length));
		var quo = document.querySelector('.quo');
quo.innerHTML = quotes[num];		
}
var space = document.querySelector('.space');
var button = document.querySelector('button');
var inputField = document.querySelector('input');
var container = document.querySelector('.toDoContainer');
button.onclick = function(){

if(inputField.value.length<1){alert("Enter a valid input")};
			
		var create = document.createElement('p');
				
				create.innerHTML = inputField.value;
			container.appendChild(create);
			inputField.value="";
			create.classList.add('paragraph');
			create.onclick = function(){create.style.textDecoration="line-through"};
			create.ondblclick =function(){create.style.display="none"};
			
	
		
			}
			
			
		function al(){	alert("Click on your text to cross it out and double click on it to delete it");}

setTimeout(al, 10000);



