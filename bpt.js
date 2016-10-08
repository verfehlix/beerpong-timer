var pauseTisch1 = false;
var pauseTisch2 = false;
var timer1IntervalId;
var timer2IntervalId;

function startTimerTisch1() {
    var display = document.querySelector('#timeTisch1')

    var minutes = display.innerHTML.split(":")[0];
    var seconds = display.innerHTML.split(":")[1];

    var timeInSeconds = parseInt(minutes) * 60 + parseInt(seconds);

    console.log(timeInSeconds);

    var timer = timeInSeconds, minutes, seconds;

    timer1IntervalId = setInterval(function () {
        if(!pauseTisch1){

            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                timer = timeInSeconds;
                clearInterval(timer2IntervalId);
            }

        }
    }, 1000);
}

function startTimerTisch2() {
    var display = document.querySelector('#timeTisch2')

    var minutes = display.innerHTML.split(":")[0];
    var seconds = display.innerHTML.split(":")[1];

    var timeInSeconds = parseInt(minutes) * 60 + parseInt(seconds);

    console.log(timeInSeconds);

    var timer = timeInSeconds, minutes, seconds;

    timer2IntervalId = setInterval(function () {
        if(!pauseTisch2){

            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                timer = timeInSeconds;
                clearInterval(timer2IntervalId);
            }

        }
    }, 1000);
}


window.onload = function () {
    $('#start1').on('click', function (e) {
        startTimerTisch1();
    });
    $('#pause1').on('click', function (e) {
        pauseTisch1 = !pauseTisch1;
    })
    $('#reset1').on('click', function (e) {
        var display = document.querySelector('#timeTisch1');
        clearInterval(timer1IntervalId);
        display.innerHTML = "20:00";
    })

    $('#start2').on('click', function (e) {
        startTimerTisch2();
    })
    $('#pause2').on('click', function (e) {
        pauseTisch2 = !pauseTisch2;
    })
    $('#reset2').on('click', function (e) {
        var display = document.querySelector('#timeTisch2');
        clearInterval(timer2IntervalId);
        display.innerHTML = "20:00";
    })

};
