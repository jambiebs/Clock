var sec = 0;
var min = 0;
var hour = 0;
var d = new Date();

setInterval (
    function(){
        d = new Date();
        sec = d.getSeconds() * 6;
        min = d.getMinutes();
        hour = d.getHours();
        document.getElementById("second").style.transform = "rotate("+ sec + " deg)";

    }, 1000
);