# demo
this is a repository for studying Vue.js
#声明式渲染
    v-bind :
    1.1 绑定属性
    v-bind:titie...
    1.2 内联字符串拼接
     <a :href="'https://'+baidu">{{text}}</a>
    1.3 class绑定
        1.3.1 对象绑定
        <span v-bind:class="{prop1:isTrue，prop2:isActive}">{{bool}}</span>
        1.3.2 数组绑定
        