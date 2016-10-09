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
                clearInterval(timer1IntervalId);
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
        // $('#start1').addClass("disabled")
        $('#start1').prop('disabled', true);
        $('#pause1').prop('disabled', false);
        $('#reset1').prop('disabled', false);

    });
    $('#pause1').on('click', function (e) {
        if(!pauseTisch1){
            $('#tisch1titel').text("Tisch 1 - PAUSE");
        } else {
            $('#tisch1titel').text("Tisch 1");
        }
        pauseTisch1 = !pauseTisch1;
    })
    $('#reset1').on('click', function (e) {
        var display = document.querySelector('#timeTisch1');
        clearInterval(timer1IntervalId);
        display.innerHTML = "20:00";
        $('#start1').removeClass("disabled")
        $('#start1').prop('disabled', false);
        $('#pause1').prop('disabled', true);
        $('#reset1').prop('disabled', true);
    })

    $('#start2').on('click', function (e) {

        startTimerTisch2();
        // $('#start2').addClass("disabled")
        $('#start2').prop('disabled', true);
        $('#pause2').prop('disabled', false);
        $('#reset2').prop('disabled', false);

    });
    $('#pause2').on('click', function (e) {
        if(!pauseTisch2){
            $('#tisch2titel').text("Tisch 2 - PAUSE");
        } else {
            $('#tisch2titel').text("Tisch 2");
        }
        pauseTisch2 = !pauseTisch2;
    })
    $('#reset2').on('click', function (e) {
        var display = document.querySelector('#timeTisch2');
        clearInterval(timer2IntervalId);
        display.innerHTML = "20:00";
        $('#start2').removeClass("disabled")
        $('#start2').prop('disabled', false);
        $('#pause2').prop('disabled', true);
        $('#reset2').prop('disabled', true);
    })

};
