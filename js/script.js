let lang = prompt ('Введите язык в формате ru - en');

if (lang == 'ru'){
    console.log ('Пн, Вт, Ср, Чт, Пт, Сб, Вс');
}else if (lang === 'en'){
    console.log ('Mon, Tue, Wed, Thu< Fri, Sat, Sun')
}else{
    console.log ('вы ввели язык в другом формате, перезагрузите страницу и попробуйте снова');
}

switch (lang){
    case 'ru':
        console.log ('Пн, Вт, Ср, Чт, Пт, Сб, Вс');
        break;
    case 'en':
        console.log ('Пн, Вт, Ср, Чт, Пт, Сб, Вс');
        break;
    default:
        console.log ('вы ввели язык в другом формате, перезагрузите страницу и попробуйте снова');
}


let lang_array = [];
lang_array['ru'] = ['Пн','Вт','СР','Чт','Пт','Сб','Вс'];
lang_array['en'] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

console.log(lang_array[lang]);



let namePerson = prompt('Введите ваше имя');

let person = (namePerson == 'Артем') ? 'директор' : (namePerson == 'Максим') ? 'преподаватель' : 'студент';

console.log (person);