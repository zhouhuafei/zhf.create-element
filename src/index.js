function createElement(json) {
    const opts = json || {};
    opts.elementName = opts.elementName || 'div'; // 标签名称
    opts.style = opts.style || {}; // style样式
    opts.customAttribute = opts.customAttribute || {}; // 自定义属性
    opts.attribute = opts.attribute || {}; // 普通属性,checked,selected,innerHTML
    const elementNode = document.createElement(opts.elementName); // 元素节点
    Object.keys(opts.style).forEach(function (attr0) {
        elementNode.style[attr0] = opts.style[attr0];
    });
    Object.keys(opts.customAttribute).forEach(function (attr1) {
        elementNode.setAttribute(`data-${attr1}`, opts.customAttribute[attr1]);
    });
    Object.keys(opts.attribute).forEach(function (attr2) {
        elementNode[attr2] = opts.attribute[attr2];
    });
    return elementNode;
}

module.exports = createElement;
