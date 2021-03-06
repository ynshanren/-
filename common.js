var HashDocument = new HashTable();
function openIframeWindows(title,url,width,height,closeBtn,obj){
	var currentIndex = parent.layer.open({
		type: 2,
		title: title,
		closeBtn: closeBtn,
		shadeClose: false,
		shade: 0.5,
		anim:0,
		maxmin: true, 
		area: [width, height],
		content: url,
		success:function(layero, index){
		},
		cancel:function(index, layero){
			setTimeout(function(){parent.HashDocument.remove("layui-layer-iframe"+index);},800)
		}
	});	
		setTimeout(function(){
			parent.HashDocument.add("layui-layer-iframe"+currentIndex,obj);
		},300);
}


function customAlert(str){
	parent.layer.alert(str);
}
		
function delTab(){
	var o = "staff_list.aspx";
	$('.J_iframe[data-id="'+o+'"]').remove();
	$('.J_menuTab[data-id="'+o+'"]').remove();
	var f = $(".content-tabs").attr("data-id");
	$('.J_menuTab[data-id="'+f+'"]').addClass("active");
	$('.J_iframe[data-id="'+f+'"]').show();
}

function listAllProperties(o){     
	var objectToInspect;     
	var result = [];
	for(objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)){  
		result = result.concat(Object.getOwnPropertyNames(objectToInspect));  
	}
	return result; 
}


function login(url,obj){
	openIframeWindows('<b>您没有权限！请重新登录</b>','login.aspx?urlStr='+url,'900px', '580px',0,obj)
}

function RefreshIfrma(IframeName,url){
	parent.HashDocument.getValue(IframeName).location=url;
	parent.layer.close(parent.layer.getFrameIndex(IframeName));
	setTimeout(function(){parent.HashDocument.remove(IframeName);},800)
	
}

function closeLogin(b,IframeName){
	if(b){
		parent.delTab();
	}
	parent.layer.close(parent.layer.getFrameIndex(IframeName));
	setTimeout(function(){parent.HashDocument.remove(IframeName);},800)
}

function layerConfirm(str){
	parent.layer.confirm(str, {
    btn: ['确定','取消'], //按钮
    shade: 0.5 //显示遮罩
	}, function(){
    	return true;
	}, function(){
    	return false;
	});
}

