'use strict'

let now = {
        weekDay: 'понедельник',
        numDay: 0,
        monthNum: 0,
        monthName: 'январь',
        year: 0,
        hour: 0,
        minute: 0,
        second: 0,
        getToday: function() {
            let today = new Date();

            // Неделя
            function getWeekDay() {
                let week = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
                let date = week[today.getDay()];
                return date;
            };

            // Месяц
            function getNameMonth() {
                let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
                let nowMonth = months[today.getMonth()];
                return nowMonth;
            };

            now.weekDay = getWeekDay();
            now.numDay = today.getDate();
            now.monthNum = today.getMonth();
            now.monthName = getNameMonth();
            now.year = today.getFullYear();
            now.hour = today.getHours();
            now.minute = today.getMinutes();
            now.second = today.getSeconds();

            //делаем  "час"
            let endOfHour;

            if(now.hour === 0 || (now.hour > 4 && now.hour < 21)) {
                endOfHour = 'ов ';
            } else if((now.hour > 1 && now.hour < 5) || now.hour === 22 || now.hour === 23) {
                endOfHour = 'а ';
            } else if(now.hour === 1 || now.hour === 21) {
                endOfHour = ' ';
            }

            // получение окончания для слов "минута", "cекунда"
            function getEndForNum(minOrSec) {
                let endWord;
                if(minOrSec % 10 === 0 || (minOrSec % 10 > 4 && minOrSec % 10 < 10) || (minOrSec > 10 && minOrSec < 15)) {
                    endWord = ' ';
                } else if(minOrSec % 10 === 1 && minOrSec !== 11) {
                    endWord = 'а ';
                } else if(minOrSec % 10 > 1 && minOrSec % 10 < 5 && minOrSec !== 12 && minOrSec !== 13 && minOrSec !== 14) {
                    endWord = 'ы ';
                }
                return endWord;
            }

            return console.log(`Сегодня ${now.weekDay}, ${now.numDay} ${now.monthName} ${now.year} года, ${now.hour} час${endOfHour}${now.minute} минут${getEndForNum(now.minute)} ${now.second} секунд${getEndForNum(now.second)}.`);
                    
        },
        // Форматирование даты и времени
        getFormatDate: function()  {
            function addZero(number) {
                if(number < 10)  {
                number = '0'+number;
                } 
                return number;
            }

            let numberDay = addZero(now.numDay);
            let numberMonth = addZero(now.monthNum+1);
            let numberMin = addZero(now.minute);
            let numberHour = addZero(now.hour);
            let numberSec = addZero(now.second);
            
            return console.log(`${numberDay}.${numberMonth}.${now.year} - ${numberHour}:${numberMin}:${numberSec}`);
         },  
};

now.getToday();
now.getFormatDate();

setInterval(now.getToday, 1000);





