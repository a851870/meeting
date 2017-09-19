
$(function(){
	var data={
		"phoneNum":true
	}
	var numVal={
		phoneNum:0,
		userNum:false,
		userPwd:$('#userPwd').val(),
		userVal:$('#userVal').val()
	}
	
	//账号验证
	$('#userNum').blur(function(){
		numVal.phoneNum=this.value.length;
		var html ="<div class='cue'><i class='iconfont icon-qingchu'></i>";
		var _this = $(this);
		$(this).siblings('.cue').remove();
		if(numVal.phoneNum == 0){
			html = html + "不能为空</div>";
			$(this).parent().append(html)
		}else if(numVal.phoneNum != 10){
			html = html + "请输入11位手机号</div>";
			$(this).parent().append(html)
		}else{
			$.getJSON('json/data.json',numVal.phoneNum,function(data){
				data.phoneNum ?(html = '' , numVal.userNum = true): html = html + "账号不存在</div>";
				_this.parent().append(html);
			});
		}
	});
	
	//删除验证框样式
	$('#userNum').focus(function(){
		$(this).siblings(".cue").remove();
	});
	
	//封装函数以便调用
	function userValidate(a,b,c,d){
		$(a).blur(function(){
		    numVal.phoneNum=this.value.length;
		    var html ="<div class="+b+"><i class='iconfont icon-qingchu'></i>";
		    var _this = $(this);
		    $(this).siblings("."+b+"").remove();
		    if(numVal.phoneNum == 0){
			    html = html + "输入不能为空</div>";
			    $(this).parent().append(html);
		    }else if(numVal.phoneNum < c){
		    	html = html + ""+d+"</div>";
			    $(this).parent().append(html);
		    }
	    });
	    $(a).focus(function(){
		    $(this).siblings(".cue").remove();
	    }); 
	}
	
	//密码和验证码基本验证
	userValidate('#userPwd','cue',6,'请输入6-16位数字、字母或常用符号，字母区分大小写');
	userValidate('#userVal','cue',4,'验证码输入有误');
	
	//更换验证码
	$('#validate').click(function(){
		var _this = $(this);
		$.ajax({
			url:'json/data.json',
			type:'get',
			success:function(data){
			    _this.attr('src',"../static/img/"+data.img);
			}
		});
	});
	
	$('#userNum,#userPwd,#userVal').blur(function(){
		if($('#userPwd').val().length>=6&&$('#userVal').val().length==4&&numVal.userNum==true){
			alert(0);
		}
	})
	
	//提交表单
	$('#entry').click(function(){
		if(numVal.userNum&&numVal.userPwd&&numVal.userVal){
			$.getJSON('json/data.json',
			    {userNum:$("#userNum").val(),userNum:$("#userPwd").val(),userNum:$("#userVal").val()},
			    function(data){
			    	if(data.yzm==0){alert("登录成功")};
			    }
			);
		}
	});
});
function purge(a){
	$("input[name="+a+"]").val('');
	$("input[name="+a+"]").siblings('.cue').remove();
}
