let week = ['Пн','Вт','СР','Чт','Пт','Сб','Вс'],
    date = new Date(),
    weekDay = getWeekDay(date);
   
for (var key in week) {
    if (key <5) {
        document.write(week[key] + '<br>');
    }
    else {
        document.write('<i style="font-style: italic">' + week[key] + '<br>')
    }
}    



function getWeekDay(date) {
    date =date || new Date();
    let days = week;
    let day = date.getDay();

    return days[day];
};
