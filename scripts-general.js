// JavaScript source code

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 50);
}

function showPage() {
    document.getElementById("myDiv").style.display = "block";
}