function countTimer(deadline){
    let period = setInterval(updateClock, 1000);
    let timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');
        
//    вычисление даты: часы, минуты, секунды
        function getTimeRemaining(){
        let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60 ),
            hours = Math.floor(timeRemaining / 60 / 60); 
            return {timeRemaining, hours,  minutes, seconds};
    }
    
      function updateClock (){
        let timer = (getTimeRemaining());
        // дописываем ноль в начало цифры
        function newFormat (n){
            if (n < 10){
                return '0' + n;
            }else {
                return n;
            }
        }

        if (timer.timeRemaining > 0){
            timerHours.textContent = newFormat(timer.hours);
            timerMinutes.textContent = newFormat(timer.minutes);
            timerSeconds.textContent =newFormat(timer.seconds);
        }
       
        if (timer.timeRemaining < 0){
            clearInterval(period, 1000);
                  
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
        }
      
      };
      updateClock();
   
}


  export default countTimer;