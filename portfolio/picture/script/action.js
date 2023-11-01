
//메인페이지 헤더
$(document).ready(function(){
	$('.gnb li').mouseover(function(){
		$(this).find('.lnb').stop().slideDown()
		$('.gnb').find('.lnbbg').stop().slideDown(300)
	})
	$('.gnb li').mouseleave(function(){
		$(this).find('.lnb').stop().slideUp()
		$('.gnb').find('.lnbbg').stop().slideUp(300)
	})




})


//상단광고
$(document).ready(function(){
	$('.topbanner button').click(function(){
		$(this).parents('.topbanner').animate({height:0});
	})
})




//퀵메뉴
$(document).ready(function(){
	var kj = parseInt($('#quick').css('top'));

	$(window).scroll(function(){
		var barwhere = $(window).scrollTop();
		$('#quick').stop().animate({top:barwhere+kj},800)

	})

	$('#quick li').click(function(){
		var quickgo = $($(this).find('a').attr('href')).offset().top;
		$('html,body').animate({scrollTop:quickgo-207}) 
		return false

	})
})


//서브페이지 헤더
$(document).ready(function(){
	$('.sub_gnb li').mouseover(function(){
		$(this).find('.sub_lnb').stop().slideDown()
		$('.sub_gnb').find('.sub_lnbbg').stop().slideDown(300)
	})
	$('.sub_gnb li').mouseleave(function(){
		$(this).find('.sub_lnb').stop().slideUp()
		$('.sub_gnb').find('.sub_lnbbg').stop().slideUp(300)
	})




})


//서브페이지 네비
$(document).ready(function(){
	$('.allthewayto li').not('.allthewayto li:first').mouseover(function(){
		$(this).find('.thirdnb').stop().slideDown();
		$('.allthewayto').find('.sub_thirdnbbg').stop().slideDown(300);
		$(this).find('.bingul').stop().animate({rotate:'90'},300)
	})
	$('.allthewayto li').not('.allthewayto li:first').mouseleave(function(){
		$(this).find('.thirdnb').stop().slideUp()
		$('.allthewayto').find('.sub_thirdnbbg').stop().slideUp(300)
		$(this).find('.bingul').stop().animate({rotate:'0'},300)
	})




})

//헤더 딸려 내려오는 거
$(document).ready(function(){
		
	
	$(window).scroll(function(){
		if($(this).scrollTop() > 10) {
			$('#mainheader').addClass('action')
			$('.lnbbg').css("background", "#1c1210");
		}
		else {
			$('#mainheader').removeClass('action');
			$('.lnbbg').css("background", "rgba(255,255,255,.09)");
		}

		/*if($(this).scrollTop() > section01Top) {
			$('#section01').css({position:'fixed', top:'140px', left:'50%', zIndex:'2'})
		}
		else {
			$('#section01').css({position:'', top:'', left:'', marginLeft:''}) 
		}*/ //섹션01 딸려오는 효과


		
	})
})

//가로스크롤
$(document).ready(function(){
	var wrapH = $('#allwrap').height();
	var docuH = $(document).height();
	var winW = $(window).width();
	var winH = $(window).height();

	$(window).scroll(function(){
		var scrT = $(this).scrollTop();
			$('.horizonscroll').css({width:(winW*scrT)/(wrapH-winH-400)})   //400은 내가 섹션 효과를 위해 각 섹션에 준 마진탑값의 총합(px)
			$('.horizonscroll_sub').css({width:(winW*scrT)/(docuH-winH)})
	})
	
})


//section01 슬라이드
$(document).ready(function(){
	var liGetsoo = $('#section01 li').length;
	var viewWidth = $('#section01').width();
	var ulWidth = $('#section01 ul').width();
	var liView = ulWidth/7
	var settime = 3000
	var autoPlay;
	
	$('#section01 li').css({width:liView});

	$('#section01 li a').css({opacity:'0.3'});
	$('#section01 li:eq(3) a').css({opacity:'1'});



	$('#section01 span').click(function(){
		clearTimeout(autoPlay)

		$('#section01 li a').animate({opacity:'0.3'});
		$('#section01 li:eq(4) a').stop().animate({opacity:'1'});

		$('#section01 li:eq(4)').stop().animate({scale:'1.3', zIndex:'2'}).siblings().animate({scale:'1', zIndex:'1'});		

		$('#section01 ul').stop().animate({marginLeft:-(liView*2)},function(){
			$('#section01 li:eq(0)').appendTo('#section01 ul');
			$('#section01 ul').css({marginLeft:-liView});
		})
		
		autoPlay = setTimeout(function(){
		$('#section01 .btn_right').click();
		},settime)
	})




	autoPlay = setTimeout(function(){
		$('#section01 .btn_right').click();
	},settime)


	


})




 //섹션 자연스럽게 뜨기, 비쥬얼 fade out
$(document).ready(function(){
	$(window).scroll(function(){
		var scrT = $(window).scrollTop();

		$('section > div').each(function(){
			var SectionTop =  $(this).offset().top;  
			var scrT = $(window).scrollTop();
			var winH = $(window).height();

			if (scrT+winH >= SectionTop + 300) {
			$(this).animate({opacity:'1',marginTop:'0'},500)
			}
		})


		$('#visual video').css({opacity:1-scrT/500})
		
	})
})



//영상플레이
$(document).ready(function(){
	$('.playbtn1').click(function(){

		$('#popvideo1').show()
		$('#popvideo1 iframe').attr('src','https://www.youtube.com/embed/hAne_qpIc1c')
	})
	$('#popvideo1 button').click(function(){

		$('#popvideo1').hide()
		$('#popvideo1 iframe').attr('src','')
	})

	$('.playbtn2').click(function(){

		$('#popvideo2').show()
		$('#popvideo2 iframe').attr('src','https://www.youtube.com/embed/lNZMLoqReys')
	})
	$('#popvideo2 button').click(function(){

		$('#popvideo2').hide()
		$('#popvideo2 iframe').attr('src','')
	})


})


//랭귀지박스+서치박스
$(document).ready(function(){
	$('.language a').click(function(){
		$('.langbox').slideDown();
		$('.searchbox').slideUp();
	})
	$('.langbox > button').click(function(){
		$('.langbox').slideUp()
	})

	$('.search a').click(function(){
		$('.searchbox').slideDown();
		$('.langbox').slideUp()
	})
	$('.searchbox > button').click(function(){
		$('.searchbox').slideUp();
	})


})



