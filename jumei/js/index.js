var menu=(function(){
	return{
		init(){
			this.events();
		},
		events(){
			//二级菜单 我的聚美 更多
			
			$('li:has(ul)').on('mouseenter',function(){
				$(this).stop(true).children('ul').slideDown()
			}).on('mouseleave',function(){
				$(this).children('ul').slideUp()
			}).children('ul').on('mouseleave',function(){
				$(this).slideUp()
			})		
		}
	}
})()
menu.init()

