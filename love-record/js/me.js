onload = function(){
		changeBG();	
		theOne();		
		//得到所有图片
		var arr = document.getElementsByTagName("img");
		for(var i=0;i<arr.length;i++){
			arr[i].style.left = i*200+"px";//控制图片间距
		}
	}
	//封装方法为了可以复用
	function changeBG(){
		//得到窗口宽高
		var w = document.body.clientWidth;
		var h = document.body.parentElement.clientHeight;
		document.body.style.backgroundSize=w+"px "+h+"px";
	}
	//窗口尺寸改变事件
	onresize = function(){
		changeBG();
	}

	setInterval(function(){
		var da = document.createElement("div");
		var db = document.createElement("div");
		da.style.top = 0;
		
		var w = document.body.clientWidth;
		var h = document.body.parentElement.clientHeight;

		da.style.left = db.style.left= parseInt(Math.random()*(w-50))+"px";
		db.style.top =0;
		db.style.transform="translateX(6px) rotate(45deg)"
		d1.appendChild(da);
		d1.appendChild(db);
		//控制数量
	},100);
	var timer = setInterval(function(){
		var arr = document.getElementsByTagName("div");
		for(var i=0;i<arr.length;i++){
			//得到原来的top
			var oldTop = parseInt(arr[i].style.top);
			oldTop +=10;
			arr[i].style.top = oldTop+"px";
			if(oldTop>=600){
				d1.removeChild(arr[i]);
			}
		//控制速度
		}
	},100);
	//轮播图
	//开启换图片的定时器
	var changeTimer = setInterval(changeImage,2000);
	function changeImage(){
		//开启定时器移动图片
		var moveTimer = setInterval(function(){
			var arr = document.getElementsByTagName("img");
			for(var i=0;i<arr.length;i++){
				//得到原来的left
				var oldLeft =  parseInt(arr[i].style.left);
				oldLeft -= 2;
				if(oldLeft<=-250){
					oldLeft=1500;
					//停止定时器
					clearInterval(moveTimer);
				}
				arr[i].style.left=oldLeft+"px";
			}
			
		},10);
	}
	
	//停止　换图片的定时器
	function stopfn(){
		clearInterval(changeTimer);
	}
	//让定时器再次开启
	function startfn(){
		//为了避免同时开启多个定时器　每次开启前都先将之前的停止
		stopfn();
		changeTimer = setInterval(changeImage,2000);
	}
	//离开页面让定时器停止
	onblur = function(){
		stopfn();
	}
	//回到页面时再次开启定时器
	onfocus = function(){
		startfn();
	}
	
	
	//相识相知相爱
	function theOne(){
		setInterval(function(){
				var d = new Date();
				var w = document.body.clientWidth;
				var h = document.body.parentElement.clientHeight;
				d2.style.left = (w-260)+"px";
				d2.style.top = "300px";
				d2.style.width="240px";
				d2.style.padding="30px";
				d2.innerText ="今天是"+ d.toLocaleDateString();
				/* d2.innerHTML += "<p>"+d.toLocaleTimeString()+"</p>"; */
				var dd = new Date("2018/09/01");
				var total = d.getTime()-dd.getTime();
				var days = parseInt(total/1000/3600/24);
				var year = parseInt(days/365);
				var month = parseInt((days%365)/30);
				var day = parseInt((days%365)%30);
				var hour = parseInt(total/3600/1000%24);
				var minute = parseInt(total/1000%3600/60);
				var seconds = parseInt(total/1000%60);
				hour = hour<10?"0"+hour:hour;
				minute = minute<10?"0"+minute:minute;
				seconds = seconds<10?"0"+seconds:seconds;
				d2.innerHTML +="<p>"+"小寒与小英"+"<br>"+"共同度过："+"<br>"+year+"年"+month+"月"+day+"天"+"<br>"+hour+"时"+minute+"分"+seconds+"秒"+"<br>"+"携手："+days+"天"+"</p>"
			},1000);
	}
	
	function disp_prompt(){
		var name=prompt("请输入您的姓名：")
			if (name=="颜晓寒"){
		  		alert("小寒你好，我是你的小英");
		  			var query = prompt("小寒是不是小英的女朋友,请输入是或不是");
		  				if(query=="是"){
		  					alert("我家小寒寒辛苦啦");
		  					alert("茫茫人海中错过了该错过的，放弃了该放弃的，于是，终于等到了你");
		  				}else{
		  					alert("是不是找新欢了");
		  					alert("再给你一次机会");
		  					disp_prompt();
		  				}
		  	}else{
		  		alert("傻瓜，自己名字都不记得了吗？");
		  		alert("再给你一次机会！");
		  		disp_prompt();
		  		
		  	}
		}




	$(function(){
	
	$("#in1").click(function(){
		var snow=prompt("小寒寒想要打开下雪功能吗？请输入snow或no")
		if(snow=="snow"){
			setInterval(function(){
				//创建雪花图片并添加到页面中
				var img = $("<img src='../myimgs/snow.png'>");
				$(document.body).append(img);
				//图片尺寸20-40 0-20+20
				var size = parseInt(Math.random()*20)+20;
				//得到屏幕的宽度
				var w = document.body.clientWidth;
				//得到随机x轴坐标
				var left = parseInt(Math.random()*(w-size));
				
				img.css({"width":size+"px","left":left+"px","height":size+"px"});
				//得到屏幕的高度
				var h = document.body.parentElement.clientHeight;
				img.animate({"top":h-size+"px"},size*100)
					.fadeOut(2000,function(){
						img.remove();
					});
			},10);
		}else{
			document.location.reload();//重载当前页面 
		}
		
		
	});
	})




	
	