$(document).ready(function() {
    //variable to keep the clicks in
    var clicks = 0;
    //variable to keep track of the time
    var timer = 0;
    //function to loop the function timing
    function time() {
        interval = setInterval(timing, 1000);
    }
    //funtion to start a countdown to alert the user
    function popup() {
        setTimeout(message, 10000);
        setTimeout(clear, 10000);
    }

    //clear the setInterval
    function clear() {
        clearInterval(time);
    }
    
    //function to have a timer up to 10s
    function timing() {
        //if timer is 10s, I want to stop the timing
        if (timer === 10) {
            $(".timer").html(timer);
            $(".clicks").html(clicks/timer);
            

        } else {
            timer = timer + 1;
            $(".timer").html(timer);
            $(".clicks").html(clicks/timer);
        }

    }

    //function to alert the user
    function message() {
        alert("Your click speed for that run was " + clicks/10 + "cps!");
    }

    //function to reset the timer and stats
    function reset() {
        clicks = 0;
        timer = 0;
    } 

    //set the stats
    $(".button").click(function() {
        if (clicks === 0) {
            time();
            clicks = clicks + 1;
            $(".clicks").html(clicks/timer);
            popup();
        } else {
            clicks = clicks + 1;
            $(".clicks").html(clicks/timer);
        }
    });    
})