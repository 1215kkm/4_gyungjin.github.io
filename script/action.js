/*페이지이동*/
$(document).ready(function(){
	$('.home').click(function(){
		$('#intro').animate({top:0})
		$('#portfolio').animate({top:'100%'})
		$('#profile').animate({top:'200%'})
		$('.pageshow').text('00')

	})
	$('.portfolio').click(function(){
		$('#intro').animate({top:'-100%'})
		$('#portfolio').animate({top:0})
		$('#profile').animate({top:'100%'})
		$('#portfolio .put_things_here li').eq(0).css('color','#282828')
		$('#portfolio .put_things_here li').eq(1).css('color','#c6c6c6')
		$('#portfolio .put_things_here li').eq(2).css('color','#c6c6c6')
		$('.content1').css({display:'block'});
		$('.content2').css({display:'none'});
		$('.content3').css({display:'none'});		
		$('.pageshow').text('01');
	})
	$('.about').click(function(){
		$('#intro').animate({top:'-200%'})
		$('#portfolio').animate({top:'-100%'})
		$('#profile').animate({top:0})
		$('#profile .put_things_here li').eq(0).css('color','#282828')
		$('#profile .put_things_here li').eq(1).css('color','#c6c6c6')
		$('.content4').stop().css({display:'block'})
		$('.content5').stop().css({display:'none'})
		$('.pageshow').text('04')
	})
})



/*페이지 이동시 a 색 바뀜*/
$(document).ready(function(){

	$('.home').click(function(){
		$('div').removeClass('green')
		$(this).addClass('green')
	})
	$('.home').mouseover(function(){})

	$('.portfolio').click(function(){
		$('div').removeClass('green')
		$(this).addClass('green')
	})
	$('.portfolio').mouseover(function(){})

	$('.about').click(function(){
		$('div').removeClass('green')
		$(this).addClass('green')
	})
	$('.about').mouseover(function(){})
})




/*컨택트 달그림 바뀌는거*/
$(document).ready(function(){
	$('.contact').mouseover(function(){
		$(this).find('img').attr('src',
			$(this).find('img').attr('src').replace('moon_hush.png','moon.png'));
	})

	$('.contact').mouseleave(function(){
		$(this).find('img').attr('src',
			$(this).find('img').attr('src').replace('moon.png','moon_hush.png'));
	})
})


/*컨택트 팝업슬라이드*/
$(document).ready(function(){
	$('.contact').click(function(){
		$('.contact_pop').stop().slideDown();
	})
	$('.close').click(function(){
		$('.contact_pop').stop().slideUp();
	})
})


/*페이지 숫자 바뀌기*/
$(document).ready(function(){
	$('.page').click(function(){
		var page = $(this).attr('data-page');
		$('.pageshow').text(page)
	})
})


/*커서이미지 사라짐*/
$(document).ready(function(){
	$('.display').mouseover(function(){
		$('.cursormove').stop().fadeOut();
	})
})



/*포트폴리오 화살표조작*/
$(document).ready(function(){

	$('.arrow_right').click(function(){
		$('.content1 ul').animate({marginLeft:'-100%'},function(){
			$('.content1 li:first').appendTo('.content1 ul')
			$('.content1 ul').css({marginLeft:0})
		})
	})

	$('.arrow_left').click(function(){
		$('.content1 ul').css({marginLeft:'-100%'})
		$('.content1 li:last').prependTo('.content1 ul')
		$('.content1 ul').animate({marginLeft:0})
	})
})


/*프로필 화살표조작*/
$(document).ready(function(){

	$('.arrow_right').click(function(){
		$('.content2 > ul').animate({marginLeft:'-100%'},function(){
			$('.content2 > ul > li:first').appendTo('.content2 > ul')
			$('.content2 > ul').css({marginLeft:0})
		})
	})

	$('.arrow_left').click(function(){
		$('.content2 > ul').css({marginLeft:'-100%'})
		$('.content2 > ul > li:last').prependTo('.content2 > ul')
		$('.content1 > ul').animate({marginLeft:0})
	})
})



/*배너 팝업창뜨기*/
$(document).ready(function(){

	$('.pack1 li').click(function(){
		var liGetsu = $(this).index()+1
		$('.beneo'+liGetsu).stop().fadeIn();
	})
	$('.pack2 li').click(function(){
		var liGetsu = $(this).index()+5
		$('.beneo'+liGetsu).stop().fadeIn();
	})
	$('.pack3 li').click(function(){
		var liGetsu = $(this).index()+9
		$('.beneo'+liGetsu).stop().fadeIn();
	})
	$('.pack4 li').click(function(){
		var liGetsu = $(this).index()+13
		$('.beneo'+liGetsu).stop().fadeIn();
	})

	$('.banner_close').click(function(){
		$('.banner_pop').stop().fadeOut();
	})
})


$(document).ready(function(){
	$('.content3 li').click(function(){
		var ligetsu = $(this).index()+1
		$('.num'+ligetsu).stop().fadeIn();
	})
	$('.landing_close').click(function(){
		$('.landing_pop').stop().fadeOut();
	})
})






/*웹페이지 팝업창뜨기*/
$(document).ready(function(){
	var eegeo                       //a태그누르면 팝업뜸
	var yogeo                       //모니터눌러도 팝업뜸

	$('.content1 a').click(function(){
		eegeo = $(this).attr('data-web');

		$('#page_'+eegeo).stop().fadeIn();
	})

	$('.monitor').click(function(){
		yogeo = $(this).parent().find('a').attr('data-web');

		$('#page_'+yogeo).stop().fadeIn();
	})

	$('.web_close').click(function(){

		$('#page_'+eegeo).stop().fadeOut()
		$('#page_'+yogeo).stop().fadeOut();
	})

})





/*탭기능*/
$(document).ready(function(){
	$('.put_things_here > ul > li').click(function(){
		var num = $(this).attr('data-num');
		
		$("[class^='content']").hide();
		$('.content'+num).show();

		$(this).css('color','#282828')
		$('.put_things_here > ul > li').not(this).css('color','#c6c6c6');

		
		
	})


})


/*화살표 비활성화*/
$(document).ready(function(){
	$('.put_things_here > ul > li').eq(2).click(function(){
		$('.arrow_left').find('img').attr('src',
			$('.arrow_left').find('img').attr('src').replace('arrow1.png','arrow1_inactive.png'));
		$('.arrow_right').find('img').attr('src',
			$('.arrow_right').find('img').attr('src').replace('arrow2.png','arrow2_inactive.png'));
		$('.arrow_right').css('cursor','default')
		$('.arrow_left').css('cursor','default')
	})

	$('.put_things_here > ul > li').eq(0).click(function(){
		$('.arrow_left').find('img').attr('src',
			$('.arrow_left').find('img').attr('src').replace('arrow1_inactive.png','arrow1.png'));
		$('.arrow_right').find('img').attr('src',
			$('.arrow_right').find('img').attr('src').replace('arrow2_inactive.png','arrow2.png'));
		$('.arrow_right').css('cursor','pointer')
		$('.arrow_left').css('cursor','pointer')
	})

	$('.put_things_here > ul > li').eq(1).click(function(){
		$('.arrow_left').find('img').attr('src',
			$('.arrow_left').find('img').attr('src').replace('arrow1_inactive.png','arrow1.png'));
		$('.arrow_right').find('img').attr('src',
			$('.arrow_right').find('img').attr('src').replace('arrow2_inactive.png','arrow2.png'));
		$('.arrow_right').css('cursor','pointer')
		$('.arrow_left').css('cursor','pointer')
	})
})




/*스킬 게이지 차는 애니메이션*/
$(document).ready(function(){
	$('li.makdae').click(function(){
		$('.photoshop span').animate({width:'90%'},1000)
		$('.html span').animate({width:'80%'},1000)
		$('.css span').animate({width:'80%'},1000)
		$('.jquery span').animate({width:'75%'},1000)
	})
})






/*상단워프*/
$(document).ready(function(){
	$('.gotop').click(function(){
		$("[class^='web_pop']").animate({scrollTop:0})
		return false
	})
})















//★★★★★★★★★★★★★★★★★★★★★★★★★★★여기서부터 모바일




/*페이지이동*/
$(document).ready(function(){
	var fivetop1 = $('.mocontent5').offset().top - 300 ;
	var quickgo1 = $('.mocontent4').offset().top - 200

	$(window).scroll(function(){

		if($(this).scrollTop() > 200) {
			$('#fixedframe').addClass('down')
			$('#fixedframe.down > h1').text('S.S.')
			$('.mo_portfolio a').css({color:'#27d780'})
			$('.mo_skills a').css({color:'#282828'})
			$('.mo_profile a').css({color:'#282828'})
		}
		else {
			$('#fixedframe.down > h1').text('Self - Simplification')
			$('#fixedframe').removeClass('down')
			$('.mo_portfolio a').css({color:'#282828'})
		}
		if($(this).scrollTop() > quickgo1) {
			$('.mo_portfolio a').css({color:'#282828'})
			$('.mo_skills a').css({color:'#282828'})
			$('.mo_profile a').css({color:'#27d780'})
		}
		else {
			$('.mo_profile a').css({color:'#282828'})
		}
		if($(this).scrollTop() > fivetop1) {
			$('.mo_portfolio a').css({color:'#282828'})
			$('.mo_profile a').css({color:'#282828'})
			$('.mo_skills a').css({color:'#27d780'})
		}
		else {
			$('.mo_skills a').css({color:'#282828'})
		}

	})




	$('.mo_portfolio').click(function(){
		var quick = $('.mocontent1').offset().top;
		$('html,body').animate({scrollTop:quick})
		return false
	})


	$('h1').click(function(){
		$('html,body').animate({scrollTop:0})
	})


	$('.mo_profile').click(function(){
		var quickgo = $('.mocontent4').offset().top;
		$('html,body').animate({scrollTop:quickgo})
		return false
	})


	$('.mo_skills').click(function(){
		var fivetop = $('.mocontent5').offset().top;
		$('html,body').animate({scrollTop:fivetop})
		return false
	})
})






/*모바일 스킬게이지*/
$(document).ready(function(){
	var fivetop1 = $('.mocontent5').offset().top - 300;

	$(window).scroll(function(){
		if($(this).scrollTop() > fivetop1) {
		$('.photoshop span').animate({width:'90%'},1000)
		$('.html span').animate({width:'80%'},1000)
		$('.css span').animate({width:'80%'},1000)
		$('.jquery span').animate({width:'75%'},1000)
	}

	})
})




/*모바일 컨택트슬라이드*/
$(document).ready(function(){
	
	$('.mo_contact').click(function(){
		$('.contact_mopop').stop().slideToggle(500);


	})
})



/*모바일 배너팝업*/
$(document).ready(function(){
	$('.mocontent2 li').click(function(){
		var no = $(this).index()+1;
		$('.no'+no).stop().fadeIn();
	})
	$('.moclose').click(function(){
		$('.banner_mopop').stop().fadeOut();
	})
})




/*모바일 웹페이지팝업*/
$(document).ready(function(){
	var eegeo

	$('.mocontent1 a').click(function(){
		eegeo = $(this).attr('data-web');

		$('#mopage_'+eegeo).stop().fadeIn();
		return false
	})

	$('.moclose').click(function(){

		$('#mopage_'+eegeo).stop().fadeOut()
		return false
	})

})
