const createElement = require('../dist/index.min');

test(`创建元素`, () => {
    const elementNode = createElement({
        elementName: 'div',
        style: {width: '100px', height: '100px'},
        customAttribute: {hello: 'world'},
        attribute: {
            className: 'g-test',
            innerHTML: '我是被创建的元素',
        },
    });
    console.log(elementNode.outerHTML);
    expect(true).toEqual(true);
});
