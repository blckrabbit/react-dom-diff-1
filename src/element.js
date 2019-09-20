class Element {
    constructor(type, props, children) {
        this.type = type;
        this.props = props;
        this.children = children;
    }
}
// 创建虚拟DOM，返回虚拟节点(object)
function createElement(type, props, children) {
    return new Element(type, props, children);
}

// render方法可以将虚拟DOM转化成真实DOM
function render(domObj) {
    // 根据 type 类型来创建对应的元素
    let el = document.createElement(domObj.type);

    // 再去遍历props属性对象，然后给创建的元素el设置属性
    for (let key in domObj.props) {
        // 设置属性的方法
        setAttr(el, key, domObj.props[key])
    }

    // 遍历子节点
    // 如果是虚拟 DOM，就继续递归渲染
    // 不是，就代表是文本节点，直接创建
    domObj.children.forEach(child => {
        child = (child instanceof Element) ? render(child) : document.createTextNode(child);
        // 添加到对应元素内
        el.appendChild(child);
    })

    return el;
}

// 设置属性
function setAttr(node, key, value) {
    switch(key) {
        case 'value':
            // node 是一个 input 或者 textarea 就直接设置其 value 即可
            if (node.tagName.toLowerCase() === 'input'
                || node.tagName.toLowerCase() === 'textarea'
            ) {
                node.value = value;
            } else {
                node.setAttribute(key, value);
            }
            break;
        default: 
            node.setAttribute(key, value);
            break;
    }
}

// 将元素插入到页面内
function renderDom(el, target) {
    target.appendChild(el);
}

export {
    Element,
    createElement,
    render,
    setAttr,
    renderDom
}
