var H = $(window).height();
var W = $(window).width();



function randomNum(minNum, maxNum) {
	switch (arguments.length) {
		case 1:
			return parseInt(Math.random() * minNum + 1);
			break;
		case 2:
			return parseInt(Math.random() * (maxNum - minNum + 1) + minNum);
			break;
		default:
			return 0;
			break;
	}
}

function create() {
	var H = $(window).height();
	for (var j = 0; j < 10; j++) {
		createTr();
	}
}

function createTr() {
	var num = randomNum(1, 4);
	var tr = $("<tr/>");
	$("#main").prepend(tr);
	for (var i = 1; i < 5; i++) {
		var td = $("<td/>");
		td.appendTo(tr);
		if (num == i) {
			td.addClass("on");
			td.attr('flag', 0);
			// var t=$("<img src='images/touch.gif'>");
			// td.append(t);
		} else {
			td.addClass("other");
		}
	};
	$(".on", tr).on("touchstart", function() {
		$(".sound3")[0].play();
		if ($(this).attr("flag") == 1) {
			return false;
		};
		createTr();
		var score = $(".page1 .score").text();
		score++;
		$(".page1 .score").text(score);
		var tdW = $("#main td").width();
		$("#main td").height(tdW);
		$("#main").velocity({
			bottom: "-=" + tdW + "px"
		}, 200);
		$(this).attr("flag", 1);
	});
	$(".other", tr).on("touchstart", function() {
		$(".cover").height(H);
		// list();
		// $(".page1 .fail").show();
		clearInterval(window.t);
		var s = $(".page1 .score").text();
		if (s >= 5) {
			$(".page1 .success").show();
			$(".success .s_result span").text(s);
		} else {
			$(".page1 .fail").show();
			$(".fail .f_result span").text(s);
		}
	});
}

function time() {
	var time = $(".page1 .time").text();
	time--;
	$('.page1 .time').text(time);
	if (time == 0) {
		clearInterval(window.t);
		var s = $(".page1 .score").text();
		if (s >= 5) {
			$(".page1 .success").show();
			$(".success .s_result span").text(s);
		} else {
			$(".page1 .fail").show();
			$(".fail .f_result span").text(s);
		}
		$(".cover").height(H);

		list();
	}
}
var excuse = true;
//var randonNum = Math.floor(Math.random() * 10);
var randonNum = Math.ceil(Math.random() * 4);

function shakeEventDidOccur() {
	if (excuse) {
		// $(".page2 .box>div").click();
		$(".page2 .box").hide();
		$(".page2 .box2").show();
		$(".sound2")[0].play();
		setTimeout(function() {
			$("#result").show();
			$(".page2 .reBg").show();
			var signPic = $("<img/>");
			signPic.attr("src", "images/signs/" + randonNum + ".png");
			$("#result").append(signPic);

			if (sts == false) {
				$(".page2 .subInfo").show();
			}
			bodyOnLoad(nickName, 1);
			$(".page2 .box2").hide();
			$(".page2 .share_btn").show();
			$(".hint").hide();
		}, 2000);
		// var result = document.getElementById("result");
		// result.className = "result";
		// var arr = ['妹子一枚', '福利图片一套', '码农笔记一本', '土豪金一台'];
		// var num = Math.floor(Math.random() * 4);
		// result.innerHTML = "恭喜，摇得" + arr[num] + "！";
		// setTimeout(function() {
		// 	result.className = "result result-show";
		// }, 1000);
		excuse = false;
	} else {
		return false;
	}

}
var H = $(window).height();

$(function() {

	/* Loading... */
	var queue = new createjs.LoadQueue();

	// queue.installPlugin(createjs.Sound);
	// queue.loadFile({id:"sound1", src:"images/music1.mp3"});

	queue.on("progress", function(e) {
		//console.log(e.progress);
		$('.loadNum').text(parseInt(e.progress * 100) + '%');
		$(".loadbg .step").css('width', (e.progress * 100) + '%');

	}, this);
	queue.on("complete", function(e) {
		$('.loadingPage').fadeOut();
		$('.black').fadeOut();
		// createjs.Sound.play("sound");
		$(".sound1")[0].play();
	}, this);
	queue.loadManifest([
		'images/bg.png',
		'images/box.gif',
		'images/s.png',
		'images/rule_bg.jpg',
		'images/f.png',
		'images/r_list.png',
		'images/on.png',
		'images/other.png',
		'images/time.png',
		'images/box.gif',
		'images/start_btn.png',
		'images/sign.png',
		'images/again.png',
		'images/box.gif',
		'images/re.png',
		'images/rule.png',
		'images/ranking.png',
		'images/monkey.gif',
		'images/lantern.gif'
	]);
	// loading finish
	// list();
	document.querySelector('body').addEventListener('touchmove', function(ev) {
		event.preventDefault();
	});
	Gifffer();
	$(".page1,.page2,.subInfo").width(W);
	$(".page1,.page2,.subInfo").height(H);
	create();
	var tdW = $("#main td").width();
	$("#main td").height(tdW);
	$(".cover").height(H);

	var t = $("<img src='images/touch.gif'>");
	$("#main tr").last().find('.on').append(t);

	$(".page1 .start").on("touchstart", function() {
		$(".sound3")[0].play();
		$(".time").css('opacity', '1');
		$(".page1 .rule").hide();

		$(".monkeyGif").hide();
		$(".lanternGif").hide();

		$("#main").css('opacity', '1');
		$(".cover").height(H - tdW);
		window.t = setInterval("time()", 1000);
	});
	$(".page1 .success .again").on("touchstart", function() {
		$(".sound3")[0].play();
		location.reload();
	})
	$(".page1 .fail .re").on("touchstart", function() {
		$(".sound3")[0].play();
		location.reload();
	})
	$(".page1 .sign").on("touchstart", function() {
		$(".sound3")[0].play();
		$(".sound1")[0].pause();
		$(".page2").css({
			opacity: '1',
			zIndex: '1500'
		});
	});
	$(".page1 .ranking_btn").on("touchstart", function() {
		$(".sound3")[0].play();
		$(".r_list").show();
		$(".ranking_cover").show();
	});
	$(".page1 .r_list .re_btn").on("touchstart", function() {
		$(".sound3")[0].play();
		$(".r_list").hide();
		$(".ranking_cover").hide();
	});
	$(".page2 .share_btn").on("touchstart", function() {
		$(".sound3")[0].play();
		$(".page2 .shareBg").show();
	});
	$(".page2 .shareBg").on("touchstart", function() {
		$(".sound3")[0].play();
		$(this).hide();
	});
	$(".page2 .submitDiv").on("touchstart", function() {
		var phone = $(".page2 .mobile").val();
		var re = /^1[34589]\d{9}$/;

		var nameInput = $(".realName").val();
		var re2 = /^[\u4e00-\u9fa5]+$/;
		if (re.test(phone) && re2.test(nameInput)) {

			$(".page2 .subInfo").hide();
		} else {
			alert("请按照要求输入!");
		}
	});
	// 摇一摇
	var myShakeEvent = new Shake({
		threshold: 15
	});

	myShakeEvent.start();

	window.addEventListener('shake', shakeEventDidOccur, false);
	// 分享

});