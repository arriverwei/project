function login(){
	this.inp1=document.getElementsByClassName('inp1')[0];
	this.inp2=document.getElementsByClassName('inp2')[0];
	this.box1=document.getElementsByClassName('box')[0];
	this.box2=document.getElementsByClassName('box2')[0];
	var _this=this;
	this.inp1.onclick=function(){
	_this.box1.style.display='block';
	_this.box2.style.display='none';
	}
	this.inp2.onclick=function(){
	_this.box2.style.display='block';
	_this.box1.style.display='none';
	}
}
login.prototype.onBut=function(){
	
}
new login()