/**
 * Created by hfk on 2016-02-28.
 */

var HFK = HFK || {};
HFK.Util = {
    getPageHeight : function(_window){
        var pageHeight = _window.innerHeight;
        if (typeof pageHeight != "number"){
            if (_window.document.compatMode == "CSS1Compat"){ //标准模式
                pageHeight = _window.document.documentElement.clientHeight;
            } else { //怪异模式
                pageHeight = _window.document.body.clientHeight;
            }
        }
        return pageHeight;
    },
    getPageWidth : function(_window){
        var pageWidth = _window.innerWidth;
        if (typeof pageWidth != "number"){
            if (_window.document.compatMode == "CSS1Compat"){ //标准模式
                pageWidth = _window.document.documentElement.clientWidth;
            } else { //怪异模式
                pageWidth = _window.document.body.clientWidth;
            }
        }
        return pageWidth;
    },
    /**
     *
     * @param node
     * @param deg 度
     */
    rotate : function(node, deg){
        node.css({
            transform:"rotate("+deg+"deg)",
            "-ms-transform":"rotate("+deg+"deg)", 	 /* IE 9 */
            "-moz-transform":"rotate("+deg+"deg)", 	 /* Firefox */
            "-webkit-transform":"rotate("+deg+"deg)", /* Safari 和 Chrome */
            "-o-transform":"rotate("+deg+"deg)" 	     /* Opera */
        });
    },
    stopBubble : function(e){
        //e.stopPropagation(); //other
        //e.cancelBubble = true; //IE
        window.event? window.event.cancelBubble = true : e.stopPropagation();
    },
    stopEvent : function(e){
        if(e.preventDefault){
            e.preventDefault(); //other
        }else{
            window.event.returnValue == false; //IE
        }
    },
    /**
     * 这里的isRoot 表示部署的地址是不是根目录
     * 如果是：http://hfkun.github.io
     * 如果不是：http://hfkun.github.io/webappname
     * @returns {*}
     */
    getWebAppName :function() {
        var isRoot = true;
        if(isRoot){
            return "";
        }
        var pathname = window.location.pathname; // pathname = '/webAppName/test.jsp'
        return pathname.substring(0, pathname.indexOf('/',1));
    },
    /**
     * 示例：http://hfkun.github.io/test.html?name=abc
     * var name = getUrlParam("name");
     * @param name
     * @returns {*}
     */
    getUrlParam : function(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var res = window.location.search.substr(1).match(reg);
        if(res!=null){
            return decodeURIComponent()(res[2]);
        }
        return null;
    },
    /**
     * 序列化表单
     * 用法示例：
     * console.info(serializeObject($("#form_id")));
     * @param form
     * @returns {{}}
     */
    serializeObject : function(form){
        var formInputs = form.serializeArray();
        var obj = {};
        var hasProp = obj.hasOwnProperty;
        for(var i=0; i<formInputs.length; i++){
            var item = formInputs[i];
            if(!hasProp.call(obj,item.name)){
                obj[item.name] = item.value;
            }else{
                obj[item.name] += ";"+item.value;
            }
        }
        return obj;
    },
    /**
     * 是否包含
     * @param arr
     * @param obj
     * @returns {boolean}
     */
    contains : function(arr, obj){
        for(var i=0; i<arr.length; i++){
            if(typeof obj == typeof {}){ //对象比较
                if(equals(arr[i], obj)){
                    return true;
                }
            }else{  //其他类型比较
                if(arr[i] === obj){
                    return true;
                }
            }
        }
        return false;
    },
    /**
     * 比较两个对象内容相等
     * @param obj1
     * @param obj2
     * @returns {boolean}
     */
    equals : function(obj1, obj2){
        if(typeof obj1 != typeof {}){
            return false;
        }
        if(typeof obj2 != typeof {}){
            return false;
        }
        var obj1Props = Object.getOwnPropertyNames(obj1);
        var obj2Props = Object.getOwnPropertyNames(obj2);
        if(obj1Props.length != obj2Props.length){
            return false;
        }
        for(var i=0; i<obj1Props.length; i++){
            var propName = obj1Props[i];
            if(obj1[propName] !== obj2[propName]){
                return false;
            }
        }
        return true;
    },
    /**
     * 对象的属性转数组
     * @param obj
     * @returns {Array}
     */
    objKey2List : function(obj){
        var res = [];
        for(var key in obj){
            res.push(key);
        }
        return res;
    },
    /**
     * 对象的值转数组
     * @param obj
     * @returns {Array}
     */
    objVal2List : function(obj){
        var res = [];
        for(var key in obj){
            res.push(obj[key]);
        }
        return res;
    },
    getCookie : function(name) {
        var start,end;
        if (document.cookie.length > 0) {
            start = document.cookie.indexOf(name + "=");
            if (start != -1) {
                start = start + name.length + 1;
                end = document.cookie.indexOf(";", start);
                if (end == -1){
                    end = document.cookie.length;
                }
                return decodeURIComponent(document.cookie.substring(start, end));
            }
        }
        return "";
    },
    /**
     * 设置cookie
     *
     * @param name
     * @param value
     * @param expiredays 保存的天数
     */
    setCookie : function(name, value, expiredays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie = name + "=" + encodeURIComponent(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
    }
};

/**
 * 提供浏览器检测的模块
 
 * 参考UEditor
 */
HFK.browser = function(){
    var agent = navigator.userAgent.toLowerCase(),
        opera = window.opera,
        browser = {
        /**
         * @property {boolean} ie 检测当前浏览器是否为IE
         * @example
         * ```javascript
         * if ( HFK.browser.ie ) {
         *     console.log( '当前浏览器是IE' );
         * }
         * ```
         */
        ie		:  /(msie\s|trident.*rv:)([\w.]+)/.test(agent),

        /**
         * @property {boolean} opera 检测当前浏览器是否为Opera
         * @example
         * ```javascript
         * if ( HFK.browser.opera ) {
         *     console.log( '当前浏览器是Opera' );
         * }
         * ```
         */
        opera	: ( !!opera && opera.version ),

        /**
         * @property {boolean} webkit 检测当前浏览器是否是webkit内核的浏览器
         * @example
         * ```javascript
         * if ( HFK.browser.webkit ) {
         *     console.log( '当前浏览器是webkit内核浏览器' );
         * }
         * ```
         */
        webkit	: ( agent.indexOf( ' applewebkit/' ) > -1 ),

        /**
         * @property {boolean} mac 检测当前浏览器是否是运行在mac平台下
         * @example
         * ```javascript
         * if ( HFK.browser.mac ) {
         *     console.log( '当前浏览器运行在mac平台下' );
         * }
         * ```
         */
        mac	: ( agent.indexOf( 'macintosh' ) > -1 ),

        /**
         * @property {boolean} quirks 检测当前浏览器是否处于“怪异模式”下
         * @example
         * ```javascript
         * if ( HFK.browser.quirks ) {
         *     console.log( '当前浏览器运行处于“怪异模式”' );
         * }
         * ```
         */
        quirks : ( document.compatMode == 'BackCompat' )
    };

    /**
    * @property {boolean} gecko 检测当前浏览器内核是否是gecko内核
    * @example
    * ```javascript
    * if ( HFK.browser.gecko ) {
    *     console.log( '当前浏览器内核是gecko内核' );
    * }
    * ```
    */
    browser.gecko =( navigator.product == 'Gecko' && !browser.webkit && !browser.opera && !browser.ie);

    var version = 0;

    // Internet Explorer 6.0+
    if ( browser.ie ){

        var v1 =  agent.match(/(?:msie\s([\w.]+))/);
        var v2 = agent.match(/(?:trident.*rv:([\w.]+))/);
        if(v1 && v2 && v1[1] && v2[1]){
            version = Math.max(v1[1]*1,v2[1]*1);
        }else if(v1 && v1[1]){
            version = v1[1]*1;
        }else if(v2 && v2[1]){
            version = v2[1]*1;
        }else{
            version = 0;
        }

        browser.ie11Compat = document.documentMode == 11;
        /**
         * @property { boolean } ie9Compat 检测浏览器模式是否为 IE9 兼容模式
         * @warning 如果浏览器不是IE， 则该值为undefined
         * @example
         * ```javascript
         * if ( HFK.browser.ie9Compat ) {
         *     console.log( '当前浏览器运行在IE9兼容模式下' );
         * }
         * ```
         */
        browser.ie9Compat = document.documentMode == 9;

        /**
         * @property { boolean } ie8 检测浏览器是否是IE8浏览器
         * @warning 如果浏览器不是IE， 则该值为undefined
         * @example
         * ```javascript
         * if ( HFK.browser.ie8 ) {
         *     console.log( '当前浏览器是IE8浏览器' );
         * }
         * ```
         */
        browser.ie8 = !!document.documentMode;

        /**
         * @property { boolean } ie8Compat 检测浏览器模式是否为 IE8 兼容模式
         * @warning 如果浏览器不是IE， 则该值为undefined
         * @example
         * ```javascript
         * if ( HFK.browser.ie8Compat ) {
         *     console.log( '当前浏览器运行在IE8兼容模式下' );
         * }
         * ```
         */
        browser.ie8Compat = document.documentMode == 8;

        /**
         * @property { boolean } ie7Compat 检测浏览器模式是否为 IE7 兼容模式
         * @warning 如果浏览器不是IE， 则该值为undefined
         * @example
         * ```javascript
         * if ( HFK.browser.ie7Compat ) {
         *     console.log( '当前浏览器运行在IE7兼容模式下' );
         * }
         * ```
         */
        browser.ie7Compat = ( ( version == 7 && !document.documentMode )
                || document.documentMode == 7 );

        /**
         * @property { boolean } ie6Compat 检测浏览器模式是否为 IE6 模式 或者怪异模式
         * @warning 如果浏览器不是IE， 则该值为undefined
         * @example
         * ```javascript
         * if ( HFK.browser.ie6Compat ) {
         *     console.log( '当前浏览器运行在IE6模式或者怪异模式下' );
         * }
         * ```
         */
        browser.ie6Compat = ( version < 7 || browser.quirks );

        browser.ie9above = version > 8;

        browser.ie9below = version < 9;

        browser.ie11above = version > 10;

        browser.ie11below = version < 11;

    }

    // Gecko.
    if ( browser.gecko ){
        var geckoRelease = agent.match( /rv:([\d\.]+)/ );
        if ( geckoRelease )
        {
            geckoRelease = geckoRelease[1].split( '.' );
            version = geckoRelease[0] * 10000 + ( geckoRelease[1] || 0 ) * 100 + ( geckoRelease[2] || 0 ) * 1;
        }
    }

    /**
     * @property { Number } chrome 检测当前浏览器是否为Chrome, 如果是，则返回Chrome的大版本号
     * @warning 如果浏览器不是chrome， 则该值为undefined
     * @example
     * ```javascript
     * if ( HFK.browser.chrome ) {
     *     console.log( '当前浏览器是Chrome' );
     * }
     * ```
     */
    if (/chrome\/(\d+\.\d)/i.test(agent)) {
        browser.chrome = + RegExp['\x241'];
    }

    /**
     * @property { Number } safari 检测当前浏览器是否为Safari, 如果是，则返回Safari的大版本号
     * @warning 如果浏览器不是safari， 则该值为undefined
     * @example
     * ```javascript
     * if ( HFK.browser.safari ) {
     *     console.log( '当前浏览器是Safari' );
     * }
     * ```
     */
    if(/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(agent) && !/chrome/i.test(agent)){
    	browser.safari = + (RegExp['\x241'] || RegExp['\x242']);
    }


    // Opera 9.50+
    if ( browser.opera )
        version = parseFloat( opera.version() );

    // WebKit 522+ (Safari 3+)
    if ( browser.webkit )
        version = parseFloat( agent.match( / applewebkit\/(\d+)/ )[1] );

    /**
     * @property { Number } version 检测当前浏览器版本号
     * @remind
     * <ul>
     *     <li>IE系列返回值为5,6,7,8,9,10等</li>
     *     <li>gecko系列会返回10900，158900等</li>
     *     <li>webkit系列会返回其build号 (如 522等)</li>
     * </ul>
     * @example
     * ```javascript
     * console.log( '当前浏览器版本号是： ' + HFK.browser.version );
     * ```
     */
    browser.version = version;

    /**
     * @property { boolean } isCompatible 检测当前浏览器是否能够与UEditor良好兼容
     * @example
     * ```javascript
     * if ( HFK.browser.isCompatible ) {
     *     console.log( '浏览器与UEditor能够良好兼容' );
     * }
     * ```
     */
    browser.isCompatible =
        !browser.mobile && (
        ( browser.ie && version >= 6 ) ||
        ( browser.gecko && version >= 10801 ) ||
        ( browser.opera && version >= 9.5 ) ||
        ( browser.air && version >= 1 ) ||
        ( browser.webkit && version >= 522 ) ||
        false );
    return browser;
}();
