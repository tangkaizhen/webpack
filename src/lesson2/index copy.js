import _ from 'lodash';
import printMe from './print.js';
import './styles.css';

function component(){
    let ele = document.createElement('div')
    var btn = document.createElement('button');

    btn.innerHTML = 'Click me and check the console!!';
    btn.onclick = printMe;
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    ele.innerHTML = _.join(['Hello', 'webpack'], ' ');

    ele.appendChild(btn);
    return ele;
}
document.body.appendChild(component())
