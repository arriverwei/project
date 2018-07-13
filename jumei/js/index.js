var menu=(function(){
	return{
		init(){
			this.events();
			this.getImg();
			this.getRightImg();
		},
		events(){
			//二级菜单 我的聚美 更多			
			$('li:has(ul)').on('mouseenter',function(){
				$(this).children('ul').stop().slideDown()
			}).on('mouseleave',function(){
				$(this).children('ul').stop().slideUp()
			}).children('ul').on('mouseleave',function(){
				$(this).slideUp()
			})	
			//今日疯抢，明日预告
			$('.newb').on('click',function(){
				$('.content-right').show()
				$('.content-left').hide()
			})	
			$('.newa').on('click',function(){
				$('.content-right').hide()
				$('.content-left').show()
			})	
			
		},
		getImg(){
			var contentleft=document.getElementsByClassName('content-left')[0];
			$.ajax({
				type:"get",
				url:"json/index.json",
				data:{},
				success:function(data){
					for(var i=0;i<data.length;i++){
						var img=document.createElement('img');
						var a=document.createElement('a');						
						img.src=data[i].src;
						a.href="details.html"+"?"+data[i].id;
						a.append(img);
						contentleft.append(a)
					}
				}
				
			});
		},
		getRightImg(){
			var contentRight=document.getElementsByClassName('content-right')[0];
			$.ajax({
				type:"get",
				url:"json/index2.json",
				data:{},
				success:function(data){
					for(var i=0;i<data.length;i++){
						var img=document.createElement('img');
						var a=document.createElement('a');						
						img.src=data[i].src;
						a.href=data[i].href;
						a.append(img);
						contentRight.append(a)
					}
				}
				
			});
		}
	}
})()
menu.init()



