let week = ['Пн', 'Вт', 'Сp', 'Чт',  'Пт', '<i style="font-style: italic">Сб</i>', '<i style="font-style: italic">Вс</i>'];


function getWeekDay(){
    let date = new Date();
    let day = date.getDay();
        if (day == 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7 - индекс должен быть 6
            day = 6;
        }
    return day;
  }
  

let weekDay = getWeekDay();
console.log(weekDay);    
   
for (let key in week) {
    if(weekDay == +key){
        document.write('<b>'+week[key] + '</b>' + '<br>');
    } else {
        document.write(week[key] + '<br>');
    }
}

