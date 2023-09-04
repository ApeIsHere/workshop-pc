const timer = function(selector, deadline) {

    function getTime() {
        const t = Date.parse(deadline) - Date.parse(new Date()), //get remaining time
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor(t / (1000 * 60 * 60) % 24),
              minutes = Math.floor(t / (1000 * 60) % 60),
              seconds = Math.floor((t / 1000) % 60);
        
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }; 
    }

    function addZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }
    
    function setClock() {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              interval = setInterval(updateClock, 1000);

        function updateClock() {
            const remainingTime = getTime();
            
            days.innerHTML = addZero(remainingTime.days);
            hours.innerHTML = addZero(remainingTime.hours);
            minutes.innerHTML = addZero(remainingTime.minutes);
            seconds.innerHTML = addZero(remainingTime.seconds);

            if (remainingTime.total <= 0) {
                clearInterval(interval);
            }
        }
        updateClock();
    }

    setClock();
};


export default timer;