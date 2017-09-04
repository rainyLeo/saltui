/**
 * Refreshcontrol Component Demo for tingle
 * @author xiaohe.wp
 *
 * Copyright 2014-2017, Tingle Team.
 * All rights reserved.
 */
import ReactDOM from 'react-dom';
import 'salt-context';
import Demo from './RefreshcontrolDemo';

window.FastClick && FastClick.attach(document.body);

// 渲染demo
ReactDOM.render(<Demo />, document.getElementById('TingleDemo'));
