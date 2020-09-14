import _ from 'lodash';
import './style.css';
import Icon from './activity-introduce.png';
import Data from './data.xml';

function component(){
    let ele = document.createElement('div')
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    ele.innerHTML = _.join(['Hello', 'webpack'], ' ');
    ele.classList.add('hello');

    // 将图像添加到我们现有的 div。
    var myIcon = new Image();
    myIcon.src = Icon;
    ele.appendChild(myIcon);

    console.log(Data);
    
    return ele;
}
document.body.appendChild(component())