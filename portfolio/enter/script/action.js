
/*로딩페이지*/

$(window).load(function(){
	$('.loading').delay(1000).fadeOut('slow')
})



/*$(window).load(function(){

$(".preloader").delay(1000).fadeOut("slow")

  // Parallax
  if ($('.parallax-background').length) {
    $(".parallax-background").parallax();
  }
  
  // Parallax
  if ($('.parallax-background-partners').length) {
    $(".parallax-background-partners").parallax();
  }  

});
*/



/*gnb모션*/
$(document).ready(function(){

	$('.maingnb li').click(function(){
		$(this).find('.lower').toggleClass('wide');
		$(this).siblings().find('.lower').removeClass('wide');
		$(this).siblings().find('.mainlnb').slideUp();
		$(this).find('.mainlnb').delay(100).slideToggle();	
	})
})

/*언어선택*/
$(document).ready(function(){
	$('.kr').mouseover(function(){
		$('.us').stop().slideDown(800);
	})
	$('.us').mouseover(function(){
		$('.us').stop().slideDown(800);
	})

	$('.kr').mouseleave(function(){
		$('.us').stop().slideUp(800);
	})

	$('.us').mouseleave(function(){
		$('.us').stop().slideUp(800);
	})
})



/*비주얼 슬라이드*/
$(document).ready(function(){
	var s3liGetsu = $('.slide3 li').length;
	var s3Width = $('.slide3').width();
	var s3ulWidth = s3Width * s3liGetsu;
	var liView3 = s3Width/1
	var timer = 5000
	var autoplay;

	var s1liGetsu = $('.slide1 li').length;
	var s1Width = $('.slide1').width();
	var s1ulWidth = s1Width * s1liGetsu;
	var liView1 = s1Width/1

	var s2liGetsu = $('.slide2 li').length;
	var s2Width = $('.slide2').width();
	var s2ulWidth = s2Width * s2liGetsu;
	var liView2 = s2Width/1

	var s4liGetsu = $('.slide4 li').length;
	var s4Width = $('.slide4').width();
	var s4ulWidth = s4Width * s4liGetsu;
	var liView4 = s4Width/1

	var vtliGetsu = $('.vtext li').length;
	var vtWidth = $('.vtext').width();
	var vtulWidth = vtWidth * vtliGetsu;
	var liViewT = vtWidth/1



	$('.slide3 ul').css({width:s3ulWidth})
	$('.slide3 li').css({width:liView3}) 

	$('.slide1 ul').css({width:s1ulWidth})
	$('.slide1 li').css({width:liView1}) 

	$('.slide2 ul').css({width:s2ulWidth})
	$('.slide2 li').css({width:liView2}) 

	$('.slide4 ul').css({width:s4ulWidth})
	$('.slide4 li').css({width:liView4}) 

	$('.vtext ul').css({width:vtulWidth})
	$('.vtext li').css({width:liViewT}) 



	$('.goright').click(function(){
		clearTimeout(autoplay)

		$('.slide3 ul').animate({marginLeft:-liView3},1500,function(){
			$('.slide3 li:first').appendTo('.slide3 ul')
			$('.slide3 ul').css({marginLeft:0})
		})

		$('.slide1 ul').animate({marginLeft:-liView1},1500,function(){
			$('.slide1 li:first').appendTo('.slide1 ul')
			$('.slide1 ul').css({marginLeft:0})
		})

		$('.slide2 ul').animate({marginLeft:-liView2},1500,function(){
			$('.slide2 li:first').appendTo('.slide2 ul')
			$('.slide2 ul').css({marginLeft:0})
		})

		$('.slide4 ul').animate({marginLeft:-liView4},1500,function(){
			$('.slide4 li:first').appendTo('.slide4 ul')
			$('.slide4 ul').css({marginLeft:0})
		})

		$('.vtext ul').animate({marginLeft:-liViewT},1500,function(){
			$('.vtext li:first').appendTo('.vtext ul')
			$('.vtext ul').css({marginLeft:0})
		})

		autoplay = setTimeout(function(){
		$('.goright').click();
		},timer)
	})




	$('.goleft').click(function(){
		clearTimeout(autoplay)

		$('.slide3 ul').css({marginLeft:-liView3});
		$('.slide3 li:last').prependTo('.slide3 ul')
		$('.slide3 ul').animate({marginLeft:0},1500)

		$('.slide1 ul').css({marginLeft:-liView1});
		$('.slide1 li:last').prependTo('.slide1 ul')
		$('.slide1 ul').animate({marginLeft:0},1500)

		$('.slide2 ul').css({marginLeft:-liView2});
		$('.slide2 li:last').prependTo('.slide2 ul')
		$('.slide2 ul').animate({marginLeft:0},1500)

		$('.slide4 ul').css({marginLeft:-liView4});
		$('.slide4 li:last').prependTo('.slide4 ul')
		$('.slide4 ul').animate({marginLeft:0},1500)

		$('.vtext ul').css({marginLeft:-liViewT});
		$('.vtext li:last').prependTo('.vtext ul')
		$('.vtext ul').animate({marginLeft:0},1500)




		autoplay = setTimeout(function(){
		$('.goright').click();
		},timer)
		
	})


	autoplay = setTimeout(function(){
		$('.goright').click();
	},timer)


})





/*메인 버튼 반짝이 효과*/
$(document).ready(function(){
	$('.btn_audi a').mouseenter(function(){
		$('.btn_audi span').stop().animate({top:'-564px'},500,'linear')
	})

	$('.btn_audi a').mouseout(function(){
		$('.btn_audi span').css({top:'404px'})
	})

	$('.btn_cubee a').mouseenter(function(){
		$('.btn_cubee span').stop().animate({top:'-564px'},500,'linear')
	})

	$('.btn_cubee a').mouseout(function(){
		$('.btn_cubee span').css({top:'404px'})
	})
})

/*to CUBE창 반짝이 효과*/
$(document).ready(function(){
	$('.btn_ask a').mouseenter(function(){
		$('.btn_ask span').stop().animate({top:'-564px'},500,'linear')
	})

	$('.btn_ask a').mouseout(function(){
		$('.btn_ask span').css({top:'404px'})
	})

	$('.btn_pro a').mouseenter(function(){
		$('.btn_pro span').stop().animate({top:'-564px'},500,'linear')
	})

	$('.btn_pro a').mouseout(function(){
		$('.btn_pro span').css({top:'404px'})
	})
})



/*푸터 맨밑에 고정*/ /*필요없어서 일단 지워두기*/
// $(document).ready(function(){
// 	var docuH = $(document).height();
// 	$('#footer').css({top:docuH})
// })


/*상단으로 가는 링크*/
$(document).ready(function(){
	$('.gotop').click(function(){
		$('html, body').animate({scrollTop:0})
		return false

	})
})




/*블루메뉴 구동*/
$(document).ready(function(){
	$('.bluemenu li').click(function(){
		var NavAVal = $(this).find('a').attr('href');
		$('html,body').stop().animate({scrollTop:$(NavAVal).offset().top});
	})
})



/*큐브아이콘 이동*/
$(document).ready(function(){

	$('.menuline li [href]').each(function(){
		if (window.location.href.indexOf(this.href) != -1) {
			$(this).parent('li').addClass('liactive');
		}
	})


	var where = $('.liactive').position().left;
	$('.menuline img').css({left:where})
	

	$('.menuline li').mouseover(function(){
		var liwhere = $(this).position().left;

		$('.menuline img').stop().animate({left:liwhere})
	})

	$('.menuline li').mouseleave(function(){
		var liwhere = $(this).position().left;

		$('.menuline img').stop().animate({left:where})
	})
})


/*앨범선택창*/
$(document).ready(function(){
	$('.albums li [href]').each(function(){
		if (window.location.href.indexOf(this.href) != -1) {
			$(this).parent('li').addClass('albumliactive');
		}
	})

	$('.albumliactive').css({boxShadow:'6px 12px 24px rgba(0,0,0,.33)'})

	$('.albums').mouseover(function(){
		$('.rightright').stop().show()
		$('.leftleft').stop().show()
	})

	$('.albums').mouseleave(function(){
		$('.rightright').stop().hide()
		$('.leftleft').stop().hide()
	})

	
})


$(document).ready(function(){
	$('.imgpack3 li').click(function(){
		$(this).find('.imgpop').stop().fadeIn();

	})
	$('.imgpop .btn').click(function(event){
		event.stopPropagation();                         //이걸 넣어주면 자식요소(.btn)의 능력(fadeout)이 부모(li)에게 영향을 주지 않는다
		$('.imgpack3 .imgpop').stop().fadeOut();
	})
})


/*작은큐브이동*/
$(document).ready(function(){

	$('.singerselect li [href]').each(function(){
		if (window.location.href.indexOf(this.href) != -1) {
			$(this).parent('li').addClass('liactive_small');
		}
	})


	var whereX = $('.liactive_small').position().left;
	var whereY = $('.liactive_small').position().top;
	var Wid = $('.liactive_small').width();
	var hei = $('.liactive_small').height();

	$('.singerselect img').css({left:whereX+Wid-'40',top:whereY+hei*'0.25'})
	

	$('.singerselect li').mouseover(function(){
		var liwhereX = $(this).position().left;
		var liwhereY = $(this).position().top;
		var liWid = $(this).width();
		var lihei = $(this).height();

		$('.singerselect img').stop().animate({left:liwhereX+liWid-'40',top:liwhereY+lihei*'0.25'})
	})

	$('.singerselect li').mouseleave(function(){
		$('.singerselect img').stop().animate({left:whereX+Wid-'40',top:whereY+hei*'0.25'})
	})
})