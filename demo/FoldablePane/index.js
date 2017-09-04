/**
 * FoldablePane Component Demo for tingle
 * @author qingnan.yqn
 *
 * Copyright 2014-2017, Tingle Team.
 * All rights reserved.
 */
import ReactDOM from 'react-dom';
import 'salt-context';
import Demo from './FoldablePaneDemo';

window.FastClick && FastClick.attach(document.body);

// 渲染demo
ReactDOM.render(<Demo />, document.getElementById('TingleDemo'));
