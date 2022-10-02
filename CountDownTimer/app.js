const hrs = document.getElementById('hours');
const mins = document.getElementById('minutes');
const secs = document.getElementById('seconds');

const countDate = new Date('July 6,2022 13:56:00').getTime();

function countdown(){
    const now = new Date().getTime();
    var diff = countDate - now;

    var hr = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.floor((diff % (1000 * 60)) / 1000);

    hrs.textContent = hr;
    mins.textContent = min;
    secs.textContent = sec;

    if(diff < 0)
    {
        hrs.textContent = 00;
        mins.textContent = 00;
        secs.textContent = 00;
    }
}
setInterval(countdown,1000);