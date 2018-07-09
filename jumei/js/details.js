new glass()
function glass(){
	this.movebox=document.getElementsByClassName('movebox')[0];
	this.showimg=document.getElementsByClassName('showimg')[0];
	this.imgbox=document.getElementsByClassName('imgbox')[0];
	var _this=this;
	this.showimg.onmouseover=function(){
		_this.left()
	}
	this.showimg.onmouseout=function(){
	    _this.right()
	}
	this.showimg.onmousemove=function(){
		_this.move()
	}
}
	glass.prototype.left=function(){
		this.movebox.style.display='block';
		this.imgbox.style.display='block';
	}
	glass.prototype.right=function(){
		this.movebox.style.display='none';
		this.imgbox.style.display='none';
	}
	glass.prototype.move=function(ev){
		var	ev=ev||window.event;
		
		this.width=ev.clientX-this.showimg.offsetLeft-this.movebox.offsetWidth/2;
		this.height=ev.clientY-this.showimg.offsetTop-this.movebox.offsetHeight/2;
		this.maxWidth=this.showimg.clientWidth-this.movebox.offsetWidth
		this.maxHeight=this.showimg.clientHeight-this.movebox.offsetHeight
		if(this.width>this.maxWidth){
			this.width=this.maxWidth
		}
		if(this.width<0){
			this.width=0;
		}
		if(this.height>this.maxHeight){
			this.height=this.maxHeight
		}
		if(this.height<0){
			this.height=0
		}
		this.movebox.style.left=this.width+'px';
		this.movebox.style.top=this.height+'px';
		this.imgbox.querySelector('img').style.left=this.width*(-2)+'px'
		this.imgbox.querySelector('img').style.top=this.height*(-2)+'px'
	}

