//{code:01,title:标题,children:[]}
function hasChildren(col){
	if(col && col.children && col.children.length>0){
		return true;
	}
	return false;
}
var MyTreeBuilder = {
	renderByLevel: function(container, list, level){
		for(var i=0; i<list.length; i++){
			var newLi = $("<li>").appendTo(container);
			var itemSrc = list[i].itemsrc || "javascript:;";
			var itemTarget = list[i].itemsrc?"_blank":"";
			var newA = $("<a href='"+itemSrc+"' target='"+itemTarget+"'>").appendTo(newLi);
			if(hasChildren(list[i])){
				var newSpan;
				if(list[i].icon){
					newSpan = $("<span class='"+list[i].icon+"' aria-hidden='true' style='margin-right:2px;'>").appendTo(newA);
				}else{
					if(level === 1){
						newSpan = $("<span class='glyphicon glyphicon-menu-down' aria-hidden='true'>").appendTo(newA);
					}else{
						newSpan = $("<span class='glyphicon glyphicon-menu-right' aria-hidden='true'>").appendTo(newA);
					}
				}
				newSpan.click(function(e){
					if($(this).hasClass("glyphicon-menu-right")){
						$(this).removeClass("glyphicon-menu-right").addClass("glyphicon-menu-down");
						$(this).parent().next("ul").slideDown();
					}else if($(this).hasClass("glyphicon-menu-down")){
						$(this).removeClass("glyphicon-menu-down").addClass("glyphicon-menu-right");
						$(this).parent().next("ul").slideUp();
					}else{ //一级目录
						$(this).parent().next("ul").slideToggle();
					}
					HFK.Util.stopEvent(e);
				});
				var ul2 = $("<ul class='loop-sub-menu"+level+"'>").appendTo(newLi);
				MyTreeBuilder.renderByLevel(ul2, list[i].children, level+1);
			}else{
				if(list[i].icon){
					newSpan = $("<span class='"+list[i].icon+"' aria-hidden='true' style='margin-right:2px;'>").appendTo(newA);
				}else {
					$("<span class='glyphicon glyphicon-star-empty'>").appendTo(newA);
				}
			}
			$("<span class='title'>").attr("title",list[i].title).html(list[i].title).appendTo(newA);
		}
	},
	init: function(container ,list){
		container.html("");
		MyTreeBuilder.renderByLevel(container, list, 1);
	}
}
