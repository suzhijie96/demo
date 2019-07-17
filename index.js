var app = new Vue({
    el:'#app',
    data: {
        message:'Hello Vue!'
    }
});

app.message = 'I have changed the data!';

var app2 = new Vue({
    el:'#app_2',
    data:{
        message:'页面加载于' + new Date().toLocaleString(),
        baidu:'www.baidu.com',
        text:'百度链接',
        isTrue:false,
        isActive:false,
        bool:'对象语法',
    }
});

var app22 = new Vue({
    el:
});
