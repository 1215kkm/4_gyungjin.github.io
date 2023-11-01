/*$(document).ready(function(){
	$('.gnb li, .lnbbg').mouseover(function(){
		$('.lnb, .lnbbg').stop().slideDown()
	})
	$('.gnb li, .lnbbg').mouseleave(function(){
		$('.lnb, .lnbbg').stop().slideUp()
})*/

//↑gnb 스크립트. css로 해놔서 일단 적어두기만 함







//비쥬얼 슬라이드

		$(document).ready(function(){
			var lilength = $('.visible li').length;				//2_ li 갯수 이름 지정 (당연히 1부터 시작)
			var timer = 7000;
			var autoplay;



			for (i=1; i<=lilength; i++) {						// 1_ i를 변수로 만들어 스판에 넣고 스크립트로 스판 넣어주기. html엔 스판 안들어가있음. 스크립트로 추가해준것
				$('.bullets').append('<span>'+i+'</span>')
			}


			$('.bullets span').eq(0).addClass('active').siblings().removeClass('active');				//3_ 첫모습 지정
			$('.visible li').eq(0).show().siblings().hide();
			
			
			var iamactive = $('.active').index();					//첫모습으로 액티브 스판 번호 매겨주기 아이 엠 액티브(스판:(손 초기설정에 필요한 전역변수도 만들어 주기 (0부터 시작함)
console.log(iamactive)










			$('.bullets span').click(function(){					//4_ '클릭'하면 네모 스판 색 바뀜
				clearTimeout(autoplay)
				var myturn = $(this).index();					//index는 순서를 말함 (0부터 시작함)
				



				$(this).addClass('active').siblings().removeClass('active');			//액티브한 분홍스퀘어
				$('.visible li').eq(myturn).fadeIn().siblings().fadeOut();			//5_ 클릭하면 스판 색 바뀌는 것 뿐 아니라 li도 바꿔줌 
				

				var iamactive = $('.active').index();							// 이거 안넣어도 잘 되긴 되는데 아이앰액티브값이 계속 0에서 바뀌지 않아서 찝찝함. 그래서 걍 넣어둠.
console.log(iamactive)


			autoplay = 
				setTimeout(function(){
					$('.vnext').click();
				},timer)

			})








			$('.vnext').click(function(){						//7_ 양방향화살표 클릭하면 옆으로 가는 거 설정
				clearTimeout(autoplay)
				var iamactive = $('.active').index();			//이거 안주면 전역함수의 아이엠액티브 적용해버려서 안됨. 새로 이름 지을 수 있도록 var지정해줌.
				

				iamactive++;								//9_ 클릭하면 1씩 증가라하는 명령

				if (iamactive >= lilength){						//8_li 5개 다 끝나면 다시 처음으로 돌아가라는 명령
					iamactive = 0
				}
				

				$('.visible li').eq(iamactive).fadeIn().siblings().fadeOut();								//10_ 누르면 해당하는것 뜨고 나머진 사라지라는 명령
				$('.bullets span').eq(iamactive).addClass('active').siblings().removeClass('active');        //11_ 스판이랑 좌측상단 상자도 바뀌라는 명령
				
console.log(iamactive)


			autoplay = 
				setTimeout(function(){
					$('.vnext').click();
				},timer)
				
			})


			





			$('.vprev').click(function(){
				clearTimeout(autoplay)
				var iamactive = $('.active').index();
				

				iamactive--;

				if (iamactive < 0){
					iamactive = lilength-1
				}
				

				$('.visible li').eq(iamactive).fadeIn().siblings().fadeOut();								
				$('.bullets span').eq(iamactive).addClass('active').siblings().removeClass('active');        

			console.log(iamactive)


			autoplay = 
				setTimeout(function(){
					$('.vnext').click();
				},timer)
				
			})









			autoplay = 
					setTimeout(function(){
						$('.vnext').click();
					},timer)




			
		})












//퀵메뉴
$(document).ready(function(){
	var kj = parseInt($('#quick').css('top'));  //초기위치값. 퀵메뉴가 맨 위에 붙어있진 않으니.  parseInt는 구성요소에서 문자는 지운다는 뜻. ex) 56px이란 표시에서 px만 지워줌. 'kj'는 top값이니까 뫄뫄px로 나올것. 거기서 px를 지우고 숫자만 남겨줌.

	$(window).scroll(function(){   //스크롤액션줄때 쓰는 줄
		var barwhere = $(window).scrollTop();  //스크롤바 위치값
		$('#quick').stop().animate({top:barwhere+kj},200)

	})


	$('.gotop').click(function(){
		$('html, body').animate({scrollTop:0})
		return false

	})

})




$(document).ready(function(){
	var pageNavi = $('.pagecount li').length;
	if (pageNavi <= 10) {
		$('.prev, .prev_first').hide();
	}
	else if (pageNavi >= 11) {
		$('.next, .next_last').show();
		$('.prev, .prev_first').show();
	}
})




$(document).ready(function(){
	
	$('.img_small li').eq(0).css({border:'2px solid #efd597'})

	var imgBigLeft = $('.img_big img').offset().left;
	var imgBigTop = $('.img_big img').offset().top;
	var largewidth = $('.img_large').width();
	var largeheight = $('.img_large').height();

	
	

	$('.img_big').mouseleave(function(){
		$('.img_large').hide()
	})
		
	$('.img_big').mouseover(function(){
		$('.img_large').show()
	})
	


	$('.img_small li').click(function(){
		$('.img_big img').attr('src',$(this).find('img').attr('src')).attr('alt',$(this).find('img').attr('alt'))
		$(this).css({border:'2px solid #efd597'}).siblings().css({border:'2px solid #e6e6e3'})
		$('.img_large img').attr('src',$(this).find('img').attr('src')).attr('alt',$(this).find('img').attr('alt'))



		
	})


	


	$('.img_big img').mousemove(function(e){     //e.pageX   e.pageY
		$('.img_large img').css({left:-e.pageX+imgBigLeft, top:-e.pageY+imgBigTop})
		console.log(e.pageX+'+'+e.pageY)

		$('.img_large').css({left:e.pageX-imgBigLeft*2, top:e.pageY-imgBigTop*2})
	})

	$('.infotitle li a').click(function(){
		var infoBoxTop = $($(this).attr('href')).offset().top;

		$('html,body').stop().animate({scrollTop:infoBoxTop})
		return false
	})
})





$(document).ready(function(){
	var Price = $('.price').text();  //기본가격
	$('.price').text(Commas(Price))
	$('.totalprice').text(Commas(Price))		//총가격
	var OptionCount = $('#option_count').val();
	$('.gae').text(OptionCount);


	$('.up').click(function(){
		OptionCount++;   //기본값에 1씩 더해주는거고
		$('#option_count').val(OptionCount)   //다시 써준거고 그런거고

		$('.totalprice').text(Commas(Price*OptionCount));
		$('.gae').text(OptionCount);
	})
	$('.down').click(function(){
		OptionCount--;
		if(OptionCount <= 0) {
			alert('구매수량은 1개부터 가능합니다.');
			OptionCount = 1;
		}
		$('#option_count').val(OptionCount);

		$('.totalprice').text(Commas(Price*OptionCount));
		$('.gae').text(OptionCount);	
	})
	/*$('#option_color').change(function(){
		var OptionColor = $(this).val();
		$('.opcolor').text(OptionColor);
	})*/

	$('#option_count').change(function(){
		OptionCount = $(this).val();
		$('.totalprice').text(Commas(Price*OptionCount));
		$('.gae').text(OptionCount);
			
		
		if (!$.isNumeric(OptionCount)) {
			alert('잘못된 입력형식입니다.')
			$('#option_count').val('1');
		$('.totalprice').text(Commas(Price*1));
		$('.gae').text('1');
		}

	})





/*	var OptionCount = $('#quantity option').val();


	$('#quantity').change(function(){
		var Quantity = $(this).val();
		$('.totalprice').text(Commas(Price*Quantity))



		$('.gae').text(Quantity);
	})*/

	function Commas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


})

