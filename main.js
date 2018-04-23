// 1.Date and Time Function

 function dayAndTime() {
    var today = new Date();
    var day = today.getDay();
    var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    var displayDay = ("Today is : " + daylist[day] + ".");
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    var prepand = (hour >= 12)? " PM ":" AM ";
    hour = (hour >= 12)? hour - 12: hour;
    if (hour===0 && prepand===' PM ') 
    { 
    if (minute===0 && second===0)
    { 
    hour=12;
    prepand=' Noon';
    } 
    else
    { 
    hour=12;
    prepand=' PM';
    } 
    } 
    if (hour===0 && prepand===' AM ') 
    { 
    if (minute===0 && second===0)
    { 
    hour=12;
    prepand=' Midnight';
    } 
    else
    { 
    hour=12;
    prepand=' AM';
    } 
    } 
    var displayTime = ("Current Time : "+hour + prepand + " : " + minute + " : " + second);

    document.getElementById("timer").innerHTML = displayDay+' '+ displayTime;

}


// 2. Formatted Date

function formattedDate(){
var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
    {
    dd='0'+dd;
    } 

if(mm<10) 
    {
    mm='0'+mm;
    } 
today = mm+'-'+dd+'-'+yyyy;
document.getElementById("date").innerHTML =(today);
today = mm+'/'+dd+'/'+yyyy;
document.getElementById("date2").innerHTML =(today);
today = dd+'-'+mm+'-'+yyyy;
document.getElementById("date3").innerHTML =(today);
today = dd+'/'+mm+'/'+yyyy;
document.getElementById("date4").innerHTML =(today);
}



// 3.Print the current page

function print_current_page()
{
window.print();
}



// 4. Random Number Game

function randomNumber(){

    // Get a random integer from 1 to 10 inclusive
    var num = Math.ceil(Math.random() *10);
    var gnum = prompt('Guess the number between 1 and 10 inclusive.');
    if (gnum == num)
        alert('Matched!');
        else
        alert('Not Matched, the number was ' + num);

} 



// 5. Forward and Back Buttons

function goBack() {
	window.history.back();
}

function goForward() {
	window.history.back();
}

    

// 6. Hover message

function trigger()

	{

	document.getElementById("hover").addEventListener("mouseover", popup());

	function popup()

	{

	alert("Welcome to my WebPage!!!");

	}

    }
    
    
// 7. Change Background color
    function changeColor(){

        document.getElementById("bgColor").style.backgroundColor = "lightblue";

    }

    function changeBack(){
        document.getElementById("bgColor").style.backgroundColor = "white";
    }