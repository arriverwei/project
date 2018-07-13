var list=(function (){
	var i;
	return {
		init(){
			this.events();
			
		},
		events(){
			var _this=this;
			$.ajax({
				type:"get",
				url:"json/index.json",
				data:{},
				success:function(data){										
					var a=location.href.split('?')[1]				
					var str="";
					for (var i=0;i<data.length;i++) {						
						if(data[i].id==a){
					str=`<div class="main">
				<div class="showimg">
					<img src="${data[i].url}"/>
					<div class="movebox"></div>
				</div>															
				<div class="showright">
					<p class="name">${data[i].name}</p>
					<p class="price">${data[i].price}</p>
					<p >01天23小时55分02秒</p>
					<p class="price-num">X元Y件</p>
					<p><a href="#">尚尚可满2件减39元</a></p>
					<p class="freight">运费<span>本商品单件包邮</span></p>
					<p>服务<a href="#">质量保证</a><a href="#">本商品不支持换货</a><a href="#">本商品不支持退货</a><a href="#">闪电发货</span></a>
					<p>型号<span>921321化妆棉盒装</span></p>
					<p class="number"><span car-span>数量</span><div class="car-number">
											<span class="car-span car-span-del">-</span><input type="text" class="car-number-text" value="1"/><span class="car-span car-span-add">+</span>
										</div></p>
					<input type="button" name="btn"  id="btn" value="加入购物车" />
					<p>26人已经付款</p>
					<p>本商品由熙香纪网络科技直接发货并提供售后服务，您在购买过程中有任何疑问可咨询聚美客服。</p>
				  </div>
					<div class="showimgbottom">
						<img src="${data[i].url}"/>
					</div>	
					<div class="imgbox">
						<img src="${data[i].url}"/>
					</div>	
				</div>`					
						}							
					}
						$(".clearfix").html(str)	
						_this.glass()
						_this.addshop()
				}				
			})				
		},
		glass:function(){
			$('.showimg').on('mouseenter',function(){
				$('.imgbox').show()
				$('.movebox').show()
			})
			$('.showimg').on('mouseleave',function(){
				$('.imgbox').hide()
				$('.movebox').hide()
			})
			$('.showimg').on('mousemove',function(ev){
				ev=ev||window.event;
				var width=ev.pageX-$('.showimg').offset().left-$('.movebox').width()/2;
				var maxwidth=$('.showimg').width()-$('.movebox').width();
//				console.log(width)
				if($('.showimg').scrollTop()){
				var height=ev.pageY-$('.showimg').offset().top-$('.movebox').height()/2+$('.showimg').scrollTop();
				var maxheight=$('.showimg').height()-$('.movebox').height();
				}else{
				var height=ev.pageY-$('.showimg').offset().top-$('.movebox').height()/2;				
				var maxheight=$('.showimg').height()-$('.movebox').height();
				}
				if(width>maxwidth){
					width=maxwidth;
				}else if(width<0){
					width=0
				}if(height>maxheight){
					height=maxheight
				}else if(height<0){
					height=0
				}
				$('.movebox').css({'left':width,'top':height});
				
				$('.imgbox').children('img').css({'left':width*(-2),'top':height*(-2)});
			})
		},
		addshop:function(){			
			$('.car-number-text').on('change',function(){
				 i=$('.car-number-text').val()
				$('.car-number-text').val(i)	
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
			
			
			$('#btn').on('click',function(){
				var a=location.href.split('?')[1]
				var obj={'id':a,'name':$('.name').text(),'src':$('.showimg>img').attr('src'),'price':$('.price').text(),'num':$('.car-number-text').attr('value')}
				var local=window.localStorage
				var y=[]
				y.push(obj);				
				local.data=JSON.stringify(y)
				console.log(localStorage)
				
			})
		}
							
	}
})()	
list.init()	
	

