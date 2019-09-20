import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createElement,render,renderDom} from './element';
import diff from './diff';
import patch from './patch';
import * as serviceWorker from './serviceWorker';

let virtualDom = createElement('ul', {class: 'list'}, [
    createElement('li', {class: 'item'}, ['lin1']),
    createElement('li', {class: 'item'}, ['lin2']),
    createElement('li', {class: 'item'}, ['lin3']),
])

console.log(virtualDom);

let el = render(virtualDom);
console.log(el);
renderDom(el, document.getElementById('root'))

// 创建另一个新的虚拟 DOM
let virtualDom2 = createElement('ul', {class: 'list-group'}, [
    createElement('li', {class: 'item active'}, ['七里香']),
    createElement('li', {class: 'item'}, ['一千年以后']),
    createElement('li', {class: 'item'}, ['需要人陪'])    
]);

// diff 两个虚拟 DOM
let patches = diff(virtualDom, virtualDom2);
console.log(patches);

// 将变化打补丁，更新到 el
patch(el, patches);

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
