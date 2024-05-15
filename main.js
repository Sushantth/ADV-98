var SpeechRecognition = window.webkitSpeechRecognition ;
var textbox = document.getElementById("text");
var Recognition = new SpeechRecognition() ;

function start() {
document.getElementById("text").innerHTML = "" ;
Recognition.start();
}

Recognition.onresult= function (event) {
var content = event.results[0][0].transcript ;
document.getElementById("text").innerHTML=content ;
console.log(content)}



