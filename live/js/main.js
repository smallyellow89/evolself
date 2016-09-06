var H = $(window).height();
var W = $(window).width();
$(function() {
	/* Loading... */
	var queue = new createjs.LoadQueue();

	// queue.installPlugin(createjs.Sound);
	// queue.loadFile({id:"sound1", src:"images/music1.mp3"});
	// queue.loadFile({id:"sound2", src:"images/music2.mp3"});
	// queue.loadFile({id:"sound3", src:"images/music3.mp3"});
	// queue.loadFile({id:"sound4", src:"images/music4.mp3"});
	// queue.loadFile({id:"sound5", src:"images/music5.mp3"});
	// queue.loadFile({id:"sound6", src:"images/music6.mp3"});
	// queue.loadFile({id:"sound7", src:"images/break.mp3"});
	// queue.loadFile({id:"sound8", src:"images/last.mp3"});
	// queue.loadFile({id:"sound9", src:"images/battery.mp3"});
	// queue.loadFile({id:"sound10", src:"images/move.mp3"});

	queue.on("progress", function(e) {
		//console.log(e.progress);
		$('.loadNum').text(parseInt(e.progress * 100) + '%');
		$(".loadbg .step").css('width', (e.progress * 100) + '%');

	}, this);
	queue.on("complete", function(e) {
		$('.loadingPage').fadeOut();
		$('.black').fadeOut();
		// createjs.Sound.play("sound");
	}, this);
	queue.loadManifest([
		'images/bg.jpg',
		'images/line1.png',
		'images/line2.png',
		'images/logo.png',
		'images/enter1.png',
		'images/enter2.png',
		'images/enter3.png',
		'images/enter4.png'
	]);
	// loading finish

	// swiper start
	var Swiper1 = new Swiper('#swiper-container1', {
		direction: 'horizontal',
		loop: true,
		width: window.innerWidth,
	});
	var Swiper2 = new Swiper('#swiper-container2', {
		direction: 'horizontal',
		loop: true,
		width: window.innerWidth,
	});
	Swiper1.params.control = Swiper2; //需要在Swiper2初始化后，Swiper1控制Swiper2
	Swiper2.params.control = Swiper1;
	// swiper finish
	$(".page1,.page2,.page3,.page4,.page5").height(H);
	$(".page1,.page2,.page3,.page4,.page5").width(W);
	$(".page1 .enter2").on("touchstart", function() {
		$(".page1 .act_info").show();
	});
	$(".page1 .act_info .close").on("touchstart", function() {
		$(".page1 ul").show();
		$(".page1 .act_info").hide();
	});
	$(".page1 .enter3").on("touchstart", function() {
		$(".page5").velocity({
			left: 0
		}, 500);
	});
	$(".page1 .enter4").on("touchstart", function() {
		$(".page2").show();
		// $(".page2").velocity({
		// 	left: 0,
		// }, 500);

	});
	$(".page2 .return").on("touchstart", function() {
		// $(".page2").velocity({
		// 	left: "-100%"
		// }, 500);
		$(".page2").hide();
	});
	$(".page3 .share").on("touchstart", function() {
		$(".page3 .shareBg").show();
	});
	$(".page3 .shareBg").on("touchstart", function() {
		$(this).hide();
	});
	$(".page3 .receive").on("touchstart", function() {
		$(".page4").velocity({
			left: 0
		}, 500);
	});
	$(".page4 .sub").on("touchstart", function() {
		$(".page5").velocity({
			left: 0
		}, 500);
	});
	$(".page5 .car").on("touchstart", function() {
		$(".page5 .car_info").show();
		$(".page5 .bus_info").hide();
	});
	$(".page5 .bus").on("touchstart", function() {
		$(".page5 .car_info").hide();
		$(".page5 .bus_info").show();
	});
	$(".page5 .back").on("touchstart", function() {
		$(".page5").velocity({
			left: "-100%"
		}, 500);
	});
	$(".thisOne").on("touchstart", function() {
		alert("已报名");
	})
});