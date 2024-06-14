var str = '珊珊.';
str+='<br>如果你有幸来到了这个页面，应该是你生日的时候了，生日快乐呀.</br>';
str+='<br>如果我猜的没错的话，你已经有了可以替代我的人了，或者说是比我更让你有新鲜感的人了.</br>';
str+='<br>这些已经不重要了，遗憾的是没有好好说再见.</br>';
str+='<br>我以后不会再爱人了，你是最后一个，也是我对爱情保留的最后一份美好了.</br>';
str+='<br>从此以后，我再也没有你了，想到这里我就像不能呼吸一样...我..好想你.</br>';
str+='<br>谢谢你，让我经常在梦里遇见你，我不想走出去，也走不出去.</br>';
str+='<br>可我接受不了爱情的不完美，我不知道你懂不懂这句话的意思.</br>';
str+='<br>.</br>';
str+='<br>.</br>';
str+='<br>时间就停留在最初相遇的时候就好.</br>';
str+='<br>如果可以，我想知道你的正确答案是谁.</br>';
str+='<br>.</br>';
str+='<br>如果你也想我，电话我，我立刻过去.</br>';
str+='<br>可以不见，但我们都要更好.</br>';
str+='<br>.</br>';
str+='<br>我想你.</br>';


var i = 0;
var j = 0;
var word = document.getElementById('word');
var wordBackground = document.getElementById('wordBackground');
var wish = document.getElementById('wish');
var attention = document.getElementById('attention');
var timer = document.getElementById('timer');
var initOpacity = 0.0;

word.style.marginTop = 10+'px'; //document.documentElement.clientHeight / 3 + 'px';
word.style.marginLeft =50+'px'; 

wordBackground.style.marginTop =5+'px'; //document.documentElement.clientHeight / 3 - 5 + 'px';
wordBackground.style.marginLeft = 45+'px';

wish.style.marginLeft = document.documentElement.clientWidth * 0.15 + 'px';
wish.style.marginTop = document.documentElement.clientHeight / 3 + 150 + 'px';

timer.style.marginTop =document.documentElement.clientHeight / 3 + 'px'; //document.documentElement.clientHeight / 3 + 230 + 'px';
timer.style.marginLeft = document.documentElement.clientWidth * 0.15 + 'px';

attention.style.marginTop = document.documentElement.clientHeight / 3 + 100 + 'px';
attention.style.marginLeft = document.documentElement.clientWidth * 0.15 + 'px';

wish.style.opacity = initOpacity;
timer.style.opacity = initOpacity;
attention.style.opacity = initOpacity;

timer.style.color = '#fa796f';

function typing() {
    if (i <= str.length) {
        word.innerHTML = str.slice(0, i++) + '_';
        var time = Math.random() > 0.7 ? 50 : 300;
        setTimeout(typing, time); //递归调用
    } else {
        wordEnd();
    }
}

function wordEnd() {
    if (j % 2 == 0) {
        word.innerHTML = str + '_';
    } else {
        word.innerHTML = str + ' ';
    }
    j++;
    setTimeout(wordEnd, 1000);
}

function leftTimer(year, month, day, hour, minute, second) {
    var leftTime = (new Date(year, month - 1, day, hour, minute, second)) - (new Date()); //计算剩余的毫秒数 
    var days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10); //计算剩余的天数 
    var hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10); //计算剩余的小时 
    var minutes = parseInt(leftTime / 1000 / 60 % 60, 10); //计算剩余的分钟 
    var seconds = parseInt(leftTime / 1000 % 60, 10); //计算剩余的秒数 
    days = checkTime(days);
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    // setInterval("leftTimer(2017,10,28,0,0,0)",1000); 
    timer.innerHTML = "From 18 To 19&nbsp;:<br>(&nbsp;" + days + " days&nbsp;&nbsp;&nbsp;" + hours + " hours&nbsp;&nbsp;&nbsp;" + minutes + " minutes&nbsp;&nbsp;&nbsp;" + seconds + " seconds&nbsp;)";
}

function checkTime(i) { //将0-9的数字前面加上0，例1变为01 
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}


setTimeout(typing, 1500);

setTimeout(function () {
    setInterval("leftTimer(2024,11,2,0,0,0)", 1000);
}, 1500)

//实现淡入效果
setTimeout(function () {
    var i = setInterval(function () {
        wish.style.opacity = initOpacity;
        timer.style.opacity = initOpacity;
        attention.style.opacity = initOpacity - 0.7;
        if (initOpacity < 1.5) {
            initOpacity += 0.01;
        }
        if (initOpacity >= 1.49) {
            clearInterval(i);
        }
        // leftTimer(2018,4,17,0,0,0)
    }, 25);

}, 10000);

// setTimeout(function () {
//     setInterval("leftTimer(2018,4,17,0,0,0)",1000);
// },10000)
// leftTimer(2017,10,28,0,0,0);