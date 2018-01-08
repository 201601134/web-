//下拉菜单
window.onload=function(){
	var a=document.getElementsByTagName('li');
	for (var i = 0;i<a.length;i++)
	{
		a[i].onmouseover=function(){
			this.className = "subMenuShow";
		}
		a[i].onmouseout=function(){
			this.className="";
		}
	}
	//banner滚动效果
	var interval;
	var a=document.getElementById("picScroll");
	var b=document.getElementById("picScroll1");
	action=function()
	{
	 	interval=window.setInterval(changeToLeft,10);
	};
	Clear=function()
	{
		clearInterval(interval);
	};
	function changeToLeft()
	{
		if(a.scrollLeft==b.offsetWidth)
			a.scrollLeft=0;
	 	else
			a.scrollLeft++;
	};
	//鼠标跟随效果
	document.onmousemove=function(e){
		var e=e?e:window.event; 
		var posx=e.clientX; 
		var posy=e.clientY; 
	    document.images[0].style.left=posx+"px"; 
	    document.images[0].style.top=posy+"px"; 
	} 
	//表单操作
	$('input[name=user]').blur(function(){
		var u=this.value;
		$(this).nextAll().remove();
		if(u&&u.length>=6){
			 $('#errortip').html('');
		}
		else{
			$(this).parent().append($('<span>用户名不正确</span>'));
            $('#errortip').html('用户名不合法');
            $(this).val('');
		}
	});
	$('input[name=user1]').blur(function(){
		var v=this.value;
		$(this).nextAll().remove();
		if(v&&v.length>=6){
			 $('#errortip').html('');
		}
		else{
			$(this).parent().append($('<span>密码不合法</span>'));
            $('#errortip').html('密码不合法');
            $(this).val('');
		}
	});
	$('input[name=user2]').blur(function(){
		var v=this.value;
		$(this).nextAll().remove();
		if(v&&v.length==11){
			 $('#errortip').html('');
		}
		else{
			$(this).parent().append($('<span>手机号码不合法</span>'));
            $('#errortip').html('手机号码不合法');
            $(this).val('');
		}
	});
	// 为“注册”按钮绑定事件处理函数
    $('button[type="submit"]').click(function(event) {
        // 校验用户名是否有效（不为空）
        var u = $('input[name=user]').val();
        if (!u) {
            alert('用户名不能为空');
            // 阻止提交表单
           event.preventDefault();
        }
    });
}