# 创建元素
```
const createElement = require('zhf.create-element');

const div = createElement({
    elementName: 'div',
    style: {width: '100px', height: '100px'},
    customAttribute: {hello: 'world'},
    attribute: {
        className: 'g-test',
        innerHTML: '我是被创建的元素',
    },
});

console.log(div.outerHTML); // <div style="width: 100px; height: 100px;" data-hello="world" class="g-test">我是被创建的元素</div>
```
