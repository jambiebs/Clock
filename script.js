
setInterval (
    function(){
        d = new Date();
        sec = d.getSeconds();
        min = d.getMinutes();
        hour = d.getHours();
        hrotation = hour*30 + min/2;
        mrotation = min*6;
        srotation = sec*6;
        document.getElementById("hour").style.transform = `rotate(${hrotation}deg)`;
        document.getElementById("minute").style.transform =`rotate(${mrotation}deg)`;
        document.getElementById("second").style.transform = `rotate(${srotation}deg)`;
    //    var digital = document.querySelector("digital")

    }, 1000

);