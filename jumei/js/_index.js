var headRight=document.getElementsByClassName('head-right')[0]
var olBox=headRight.querySelector('ol')
var lis=olBox.querySelectorAll('li')
var ulBox=headRight.getElementsByClassName('ul')[0]
var ulRight=headRight.getElementsByClassName('ul_right')[0]
var icon=lis[3].querySelector('i')
var icon_right=lis[5].querySelector('i')
var navRight=document.getElementsByClassName('nav-right')[0]
var navRspan=navRight.querySelector('span')
var ulNavbox=document.getElementsByClassName('right-box')[0]
var bannerUl=document.getElementsByClassName('banner-ul')[0]
var bannerLi=document.getElementsByClassName('banner-li')[0]
var contentMain=document.getElementsByClassName('content-main')[0]


lis[5].onmouseover=function(){
	ulRight.style.display='block'
	icon_right.innerHTML='&#xe608;'
	ulRight.onmouseleave=function(){
	ulRight.style.display='none'
	icon_right.innerHTML='&#xe605;'
}
}

lis[5].onmouseleave=function(){
	ulRight.style.display='none'
	icon_right.innerHTML='&#xe605;'
	ulRight.onmouseover=function(){
		ulRight.style.display='block'
	icon_right.innerHTML='&#xe608;'
	}
}

navRspan.onmouseover=function(){
	ulNavbox.style.display='block'
	ulNavbox.onmouseleave=function(){
		ulNavbox.style.display='none'
	}
}

navRspan.onmouseleave=function(){
	ulNavbox.style.display='none'
	ulNavbox.onmouseover=function(){
		ulNavbox.style.display='block'
	}
}

bannerLi.onmouseover=function(){
	bannerUl.style.display='block'
	bannerUl.onmouseleave=function(){
		bannerUl.style.display='none'
	}
}

bannerLi.onmouseleave=function(){
	bannerUl.style.display='none'
	bannerUl.onmouseover=function(){
		bannerUl.style.display='block'
	}
}


