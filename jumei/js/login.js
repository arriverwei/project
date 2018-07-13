function login(){
	this.inp1=document.getElementsByClassName('inp1')[0];
	this.inp2=document.getElementsByClassName('inp2')[0];
	this.box1=document.getElementsByClassName('box')[0];
	this.box2=document.getElementsByClassName('box2')[0];
	this.text1=document.getElementsByClassName('text')[0];
	this.text2=document.getElementsByClassName('text2')[0];
	this.text3=document.getElementsByClassName('text')[1];
	this.text4=document.getElementsByClassName('text')[2];
	this.but=document.getElementsByClassName('but')[0];
	this.span=document.querySelectorAll('.spanbox');
	var _this=this;
	this.inp1.onclick=function(){
	_this.box1.style.display='block';
	_this.box2.style.display='none';
		
	}
	this.inp2.onclick=function(){
	_this.box2.style.display='block';
	_this.box1.style.display='none';
	
	}
	this.text1.onblur=function(){
	   _this.onBut()
	}	
	this.text3.onblur=function(){
		_this.onname()
	}
	this.text4.onblur=function(){
		_this.onPass()
	}	
	this.but.onclick=function(){
		_this.onPass()
		_this.onname()
		_this.onBut()
		
		 if(_this.regPhone.test(_this.text1.value)){
		 	location.href='index.html';
		 }else if(_this.regEmail.test(_this.text3.value)||_this.regPhone.test(_this.text3.value)&&_this.regPass.test(_this.text3.value)){
		 	location.href='index.html';
		 }else{
		 	alert('输入有误，请重新输入');
		 	location.href='login.html';
		 }
	}
}
		login.prototype.onBut=function(){
			this.regPhone=/^1[3456789]\d{9}$/
			if(this.regPhone.test(this.text1.value)){
				this.span[0].innerHTML='输入正确';
			}else{
				this.span[0].innerHTML='输入错误';
			}
		}	
		login.prototype.onname=function(){
			this.regPhone=/^1[3456789]\d{9}$/
			this.regEmail=/^[A-Za-z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
			if(this.regEmail.test(this.text3.value)||this.regPhone.test(this.text3.value)){
				this.span[2].innerHTML='输入正确';
			}else{
				this.span[2].innerHTML='输入错误';
			}
		}
		login.prototype.onPass=function(){
			this.regPass=/^\w{8,16}$/
			this.regPhone=/^1[3456789]\d{9}$/
			if(this.regPass.test(this.text3.value)){
				this.span[3].innerHTML='输入正确';
			}else{
				this.span[3].innerHTML='输入错误';
			}
		}
		
new login()