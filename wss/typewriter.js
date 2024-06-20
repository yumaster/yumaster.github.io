var str = '珊珊.';
str+='<br>如果你有幸来到了这个页面，应该是你生日的时候了，生日快乐呀.</br>';
str+='<br>如果我猜的没错的话，你已经有了可以替代我的人了，或者说是比我更让你有新鲜感的人了.</br>';
str+='<br>这些已经不重要了，遗憾的是，已经没有遗憾了.</br>';
str+='<br>我以后不会再爱人了，你是最后一个，也是我对爱情保留的最后一份美好.</br>';
str+='<br>从此以后，我再也没有你了，我爱的人早在我二十七岁的时候就爱过我了.</br>';
str+='<br>至于你是谁的妻子，是谁的母亲，我都祝福你.</br>';
str+='<br>可我接受不了爱情的不完美，嗯，现在接受了.</br>';
str+='<br>.</br>';
str+='<br>我的意思是，你不会老去发福，也不会带有柴米油盐的烟火气息.</br>';
str+='<br>如果可以，希望你永远年轻漂亮.</br>';
str+='<br>.</br>';
str+='<br>如果你也想我，穿着小裙子在我的记忆里朝我挥手吧.</br>';
str+='<br>可以不见，但我们都要更好.</br>';
str+='<br>.</br>';
str+='<br>我想你，在每一个阴雨天里.</br>';



var i = 0;
var j = 0;
var word = document.getElementById('word');
var wordBackground = document.getElementById('wordBackground');
var wish = document.getElementById('wish');
var attention = document.getElementById('attention');
var timer = document.getElementById('timer');
var initOpacity = 0.0;

word.style.marginTop = 100+'px'; //document.documentElement.clientHeight / 3 + 'px';
word.style.marginLeft =50+'px'; 

wordBackground.style.marginTop =45+'px'; //document.documentElement.clientHeight / 3 - 5 + 'px';
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
    timer.innerHTML = "From 27 To 28&nbsp;:<br>(&nbsp;" + days + " days&nbsp;&nbsp;&nbsp;" + hours + " hours&nbsp;&nbsp;&nbsp;" + minutes + " minutes&nbsp;&nbsp;&nbsp;" + seconds + " seconds&nbsp;)";
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