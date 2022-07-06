$(function() {
  const $gnbmnu = $('nav > .gnb > li > a');
  const $lnbmnu = $('nav > .gnb > li > .lnb-container');
  
  const $indicator = $('.visual > .slides > .slides-pagination > li > a');
  const $container = $('.visual > .slides > .slides-container');
  const $btnPrev = $('.prev');
  const $btnNext = $('.next');

	const $prev2 = $('.ongoing > a.prev2');
	const $next2 = $('.ongoing > a.next2');
	const $container2 = $('.ongoing > .container2 > ol');

	const $logo = $('.logo');
	const $aside = $('aside > span > a > i');
  
  let nowIdx = 0;

	// 메인 슬라이드
	$indicator.on('click', function(evt) {
		evt.preventDefault();

		nowIdx = $indicator.index(this);

		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

		$container.stop().animate({
			left: -1450 * (nowIdx + 5)
		});
	});

	//다음버튼에 대한 클릭이벤트 구문
	$btnNext.on('click', function(evt) {
		evt.preventDefault();

		if (nowIdx < 4) {
			nowIdx++;
		} else {
			nowIdx = 0;
		}

		// console.log('nowIdx =', nowIdx);
		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

		//컨테이너 이동
		$container.stop().animate({
			left: -1450 * 6
		}, 400, function() {
			$('.slides > .slides-container > p:first-child').appendTo($container);
			$container.css({ left: -1450 * 5 });
		});
	});

	//이전버튼에 대한 클릭이벤트 구문
	$btnPrev.on('click', function(evt) {
		evt.preventDefault();

		if (nowIdx > 0) {
			nowIdx--;
		} else {
			nowIdx = 4;
		}

		// console.log('nowIdx =', nowIdx);
		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

		$container.stop().animate({
			left: -1450 * 4
		}, 400, function() {
			$('.slides > .slides-container > p:last-child').prependTo($container);
			$container.css({ left: -1450 * 5 });
		});
	});

	//예약 바로가기 
	$('.close').on('click', function(){
		$('.reservation').slideUp(500);
		$('header').css({marginTop:40});
	});

	$(window).on('load', function(){
		$('.reservation').show();
		$('html, body').stop().animate({scrollTop:0});
	});

	// gnb 활성화
	$gnbmnu.on('mouseover', function(evt){
		evt.preventDefault();

		nowIdx = $gnbmnu.index(this);
		$lnbmnu.eq(nowIdx).stop().show();
		$(this).parent().removeClass().siblings().addClass('on');
});

	$gnbmnu.on('mouseleave', function(evt){
		evt.preventDefault();

		nowIdx = $gnbmnu.index(this);
		$lnbmnu.eq(nowIdx).stop().hide();
		$gnbmnu.parent().removeClass();
	})

	$lnbmnu.on('mouseover', function(){

		nowIdx = $lnbmnu.index(this);
		$gnbmnu.eq(nowIdx).trigger('mouseover');
	})

	$lnbmnu.on('mouseleave', function(){

		nowIdx = $lnbmnu.index(this);
		$gnbmnu.eq(nowIdx).trigger('mouseleave');
	})
	
	// 2nd 슬라이드 - 다음버튼 클릭이벤트 구문
	$next2.on('click', function(evt){
		 evt.preventDefault();

		 nowIdx = $('.container2 > ol > li').index(this);
			console.log('nowIdx =',nowIdx);

	
		 if(nowIdx < 5){
			 nowIdx ++;
		 } else {
			 nowIdx = 0;
		 }
		
		 $container2.stop().animate({
			 left: -400 * 7
		}, 500, function() {
			$('.container2 > ol > li:first-child').appendTo($container2);
			$container2.css({ left: -400 * 6 });
		});
	 });

	 //이전버튼 클릭이벤트 구문
	 $prev2.on('click', function(evt){
		evt.preventDefault();

		nowIdx = $('.container2 > ol > li').index(this);
		console.log('nowIdx =',nowIdx);
		
		if(nowIdx > 0){
			nowIdx --;
		} else {
			nowIdx = 5;
		}
	 
		$container2.stop().animate({
		 left: -400 * 5
	 }, 500, function() {
		 $('.container2 > ol > li:last-child').prependTo($container2);
		 $container2.css({ left: -400 * 6 });
		});
	});
	
	$(window).on('scroll', function() {

		const logoBottomDistance = $logo.offset().top + $logo.height();

		console.log('logoBottomDistance=', logoBottomDistance);

		if ($(this).scrollTop() > logoBottomDistance) {
			$('#wrap > header > nav').addClass('fixed').width(1520).css({
				marginLeft: -1520 / 2 + 30
			});
		} else {
			$('#wrap > header > nav').removeClass('fixed').width(1520).css({
				marginLeft: 0
			});
		}
	});

	// top버튼
		$(window).on('scroll', function() {
	
			let scrollTop = $(this).scrollTop();
	
			if (scrollTop > 200) {
				 $aside.stop().fadeIn();
			} else {
				 $aside.stop().fadeOut();
			}
	 });
	
}); //끝
