var shopping=(function(){
	return{
	init:function(){
		this.events();
	},
	events:function(){
		var local=window.localStorage;
		var json=JSON.parse(local.data);
		var str='';
		var _this=this	
			str=`<tr class="tbody-tr">
				<td>
				    <div class="car-clearfix">
						<div class="clearfix-left">
							<input type="checkbox" class="car-inp" />
						</div>
						<div class="clearfix-img">
						<a href="#"><img src="${json[0].src}"/></a>
						</div>
						<div class="clearfix-main">
							<p>${json[0].name}</p>
							<p>容量：150g</p>
						</div>
					</div>
						</td>
						<td>
						<div class="price-box">
						<p class="true-price">${json[0].price}</p>
						<p class="mark-price">65.00</p>
						</div>
						</td>
									
						<td>
						<div class="car-number">
							<span class="car-span car-span-del">-</span><input type="text" class="car-number-text" value="${json[0].num}"/><span class="car-span car-span-add">+</span>
						</div>
							</td>
							<td>
								<div class="pay-price">
									<p class="total-price">${json[0].price}</p>
									<p class="save-price">省26.00</p>
								</div>
								</td>
								<td>
								<div class="td-option"><i class="iconfont icon-lajixiang"></i></div>
								    </td>
								</tr>`
					
				$('tbody').append(str)
				_this.addshop()
	},
		addshop:function(){			
			$('.car-number-text').on('change',function(){
				 i=$('.car-number-text').val()
				$(this).val(i)					
			})
			$('.car-span-del').on('click',function(){				
				 i=$('.car-number-text').val()
				if(i<=1){
					i=2
				}
				i--;
				$('.car-number-text').val(i)				
			})
			$('.car-span-add').on('click',function(){
				i=$('.car-number-text').val()
				i++
				$('.car-number-text').val(i)					
			})
			
			
			
}			
	}
})()
shopping.init()

	