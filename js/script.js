let s1 = '    Hello my friend, friend,friend,friend,friend,friend,friend,friend,friend,friend,friend,friend  ',
    s2 = 20,
    s3 = true,
    str;




function lesson4 (data){
    if (typeof data !== 'string'){
        console.log('data is not a string')
    }else{
        console.log(data.trim());
        if (data.length > 30){
            data.trim();
            str = data.substr(0, 30) + '...';            
            console.log(str);
        }
    }
};

lesson4(s1);