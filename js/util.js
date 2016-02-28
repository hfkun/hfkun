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
    }
};

