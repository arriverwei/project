new detection()
function detection(){
	this.text1=document.getElementsByClassName('text1')[0]
	this.text2=document.getElementsByClassName('text2')[0]
	this.pass1=document.getElementsByClassName('pass1')[0]
	this.pass2=document.getElementsByClassName('pass2')[0]
	this.remindBox=document.getElementsByClassName("remind")
	this.remind=document.getElementsByClassName('remind2')[0]
	this.num=document.getElementsByClassName('number')[0]
	this.btn=document.getElementById('btn')
	var _this=this
	this.text1.onblur=function(){
		_this.regExp()
	}
	this.pass1.onblur=function(){
		_this.regPa()
	}
	this.pass2.onblur=function(){
		_this.regpa()
	}	
	this.btn.onclick=function(){
		_this.regExp()
		_this.regPa()
		_this.regpa()
		var regPhone=/^1[356789]\d{9}$/	
		var regPass=/^\w{8,16}$/
		if(regPhone.test(_this.text1.value)&&regPass.test(_this.pass1.value)&&regPass.test(_this.pass1.value)&&_this.pass2.value==_this.value){
			location.href='index.html';
		}
	}
}
detection.prototype.regExp=function(){
	var regPhone=/^1[356789]\d{9}$/	
	if(regPhone.test(this.text1.value)){
		this.remindBox[0].style.display='block'
		this.remindBox[0].innerHTML='手机输入正确'
		this.remindBox[0].style.color='green'
	}else{
		this.remindBox[0].innerHTML='手机输入有误'
		this.remindBox[0].style.display='block'	
		this.remindBox[0].style.color='red'
	}
	
}
detection.prototype.regPa=function(){
	var regPass=/^\w{8,16}$/
	if(regPass.test(this.pass1.value)){
		this.remindBox[1].style.display='block'
		this.remindBox[1].innerHTML='密码正确'
		this.remindBox[1].style.color='green'
	}else{
		this.remindBox[1].innerHTML='密码输入有误'
		this.remindBox[1].style.display='block'	
		this.remindBox[1].style.color='red'
	}
}
detection.prototype.regpa=function(){
	var regPass=/^\w{8,16}$/
	this.value=this.pass1.value
	if(regPass.test(this.pass1.value)&&this.pass2.value==this.value){
		this.remindBox[2].style.display='block'
		this.remindBox[2].innerHTML='密码正确'
		this.remindBox[2].style.color='green'
	}else{
		this.remindBox[2].innerHTML='密码输入有误'
		this.remindBox[2].style.display='block'	
		this.remindBox[2].style.color='red'
	}
}

