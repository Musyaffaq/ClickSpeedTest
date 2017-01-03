$(document).ready(function() {
    //variable to keep the clicks in
    var clicks = 0;
    
    //variable to keep track of the time
    var timer = 0;
        
    //clear the setInterval
    function clearTime() {
        clearInterval(time);
    }
    
    //set the stats
    $(".button").click(function() {
        if (clicks === 0) {
            time();
            clicks = clicks + 1;
            $(".clicks").html(clicks/timer);
        } else if (timer === 10) {
            
        } else {
            clicks = clicks + 1;
            $(".clicks").html(clicks/timer);
        }
    })
    
    //function to have a timer up to 10s
    function timing() {
        //if timer is 10s, I want to stop the timing
        if (timer === 10) {
            $(".timer").html(timer);
            $(".clicks").html(clicks/timer);
            alert("Your click speed was " + clicks/timer + " cps.");
            reset();
        } else {
            timer = timer + 1;
            $(".timer").html(timer);
            $(".clicks").html(clicks/timer);
        }

    }
    
    //function to loop the function timing
    function time() {
        interval = setInterval(timing, 1000);
    }
    
    //function to tell the user their cps at the end of the run
    function message() {
        alert("Your click speed for that run was " + clicks/10 + "cps!");
    }

    //function to reset the timer and stats
    function reset() {
        clicks = 0;
        $(".clicks").html("0");
        timer = 0;
        $(".timer").html("0");
        clearInterval(interval);
    }
    
    //reset button
    $("button").click(function() {
        reset();
    })
})