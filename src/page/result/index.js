/*
* @Author: cg
* @Date:   2018-01-26 21:14:32
* @Last Modified by:   cg
* @Last Modified time: 2018-01-26 22:01:04
*/
'use strict';
require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');

$(function(){
    var type        = _mm.getUrlParam('type') || 'default',
        $element    = $('.' + type + '-success');
    // 显示对应的提示元素
    $element.show();
});