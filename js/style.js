$(function() {
	$(".design_down").click(function(){
		if ($(".skills_design_info").is(":hidden")) {
			$(".skills_design_info").slideDown('400');
		}else if($(".skills_design_info").is(":visible")){
			$(".skills_design_info").slideUp('400');
		};
		if($(".skills_program_info").is(':visible')){
			$(".skills_design_info").slideDown('400');
			$(".skills_program_info").slideUp('400');
		}
		if($(".skills_web_info").is(':visible')){
			$(".skills_design_info").slideDown('400');
			$(".skills_web_info").slideUp('400');
		}
	});
	$(".program_down").click(function(){
		if ($(".skills_program_info").is(":hidden")) {
			$(".skills_program_info").slideDown('400');
		}else if($(".skills_program_info").is(":visible")){
			$(".skills_program_info").slideUp('400');
		}
		if($(".skills_design_info").is(':visible')){
			$(".skills_program_info").slideDown('400');
			$(".skills_design_info").slideUp('400');
		}
		if($(".skills_web_info").is(':visible')){
			$(".skills_program_info").slideDown('400');
			$(".skills_web_info").slideUp('400');
		}
	});
	$(".web_down").click(function(){
		if ($(".skills_web_info").is(":hidden")) {
			$(".skills_web_info").slideDown('400');
		}else if($(".skills_web_info").is(":visible")){
			$(".skills_web_info").slideUp('400');
		}
		if($(".skills_program_info").is(':visible')){
			$(".skills_web_info").slideDown('400');
			$(".skills_program_info").slideUp('400');
		}
		if($(".skills_design_info").is(':visible')){
			$(".skills_web_info").slideDown('400');
			$(".skills_design_info").slideUp('400');
		}
	});
	$(window).scroll(function() {
		var scrollY = $(document).scrollTop();
		if (scrollY > 0){ 
			$('.navbar-default').css({
				background: 'rgba(0,0,0,0.5)',
				transition: 'background 0.5s'
			});
		} else if (scrollY ==0) {
			$('.navbar-default').css({
				background: 'transparent',
				transition: 'background 0.5s'
			});
		};             
	});
	if(!$.support.leadingWhitespace){
		location.href = "/wp-content/themes/tutorial/brower.html";
	}
	$(".cd-timeline-content").hover(function() {
		$(this).find('h2').css('color', '#fff');
	}, function() {
		$(this).find('h2').css('color', '#303e49');
	});

	 $('a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                    scrollTop: targetOffset
                },
                800);
                return false;
            }
        }
    });	
	$('.intro .container .img-responsive').hide().fadeIn(1500);

	$(".portfolio .web_zp").mouseenter(function() {
		$(this).addClass('on');
	});
	$(".portfolio .web_zp").mouseleave(function() {
		$(this).removeClass('on');
	});

	$(".portfolio .pm_zp").mouseenter(function() {
		$(this).addClass('on');
	});
	$(".portfolio .pm_zp").mouseleave(function() {
		$(this).removeClass('on');
	});
})
