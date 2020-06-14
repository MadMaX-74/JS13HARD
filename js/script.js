let week = ['Пн','Вт','СР','Чт','Пт','Сб','Вс'];


function getWeekDay(date){
    let days = week;
  
    return days[date.getDay()];
  }
  
let date = new Date();
let weekDay = getWeekDay(date);
console.log(weekDay);    
   
for (var key in week) {
    if (key <5) {
        document.write(week[key] + '<br>');
    }
    else {
        document.write('<i style="font-style: italic">' + week[key] + '<br>')
    }
}    


