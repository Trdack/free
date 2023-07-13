(function(w){

    function countTime(elem) {
        let startDate = new Date("2023-07-08 11:11:11");
        let endDate = new Date();
    
        let difftime = endDate - startDate;
        let s = (difftime-difftime%1000)/1000;

        let days = (s - s%86400)/86400;
        let hours = (s - s%3600)/3600 - days*24;
        let mintues = (s - s%60)/60 - (days*24+hours)*60;
        let seconds = s%86400%3600%60;
    
        let str = days + '天' + hours + '时' + mintues + '分' + seconds + '秒';

        elem.innerHTML = str;
    }

    let elem = document.querySelector('.lasting_time');
    let countTime01 = setInterval(() => {
        countTime(elem);
    }, 1000);

})()