var nickName;
var sts = false;
var H = $(window).height();
var W = $(window).width();
var speed = 0;
var bgspeed = 60;
var t = 0;
var level = 0;
var gameOver = false;

var level1Task;
var level2Task;
var level3Task;
var level4Task;
var treeTask;
var monkeyTask;
var timeTask;

var time = 0;

var levelDiv1 = $("<div class='level1 level'><img src='images/l1.png' alt='' /></div>");
var levelDiv2 = $("<div class='level2 level'><img src='images/l2.png' alt='' /></div>");
var levelDiv3 = $("<div class='level3 level'><img src='images/l3.png' alt='' /></div>");
var levelDiv4 = $("<div class='level4 level'><img src='images/l4.png' alt='' /></div>");
var t1 = "小心呐，飞得太快，断线失控了。";
var t2 = "已经坚持了XX秒，飞跃了XXXX米";
var t3 = "糟糕！风力太小，跌落了。";
var t4 = "原来你就是那个藏在民间的窜天猴大神，";
var t5 = "还不快来世茂龙湾中法风筝节大展身手！";

function setGameOver() {
	// alert(level);
	clearInterval(timeTask);
	$(".res").show();
	switch (level) {
		case 0:
			//失败
			// alert("失败");
			$(".res").show();
			$(".res .t1").text(t3);
			$(".res .t2").text("已经坚持了" + time + "秒，飞跃了" + (level * 2500) + "米");
			break;
		case 1:
			//过了第一关
			// alert("111");
			$(".res").show();
			$(".res .t1").text(t3);
			$(".res .t2").text("已经坚持了" + time + "秒，飞跃了" + (level * 2500) + "米");
			break;
		case 2:
			//过了第二关
			// alert("222");
			$(".res").show();
			$(".res .t1").text(t3);
			$(".res .t2").text("已经坚持了" + time + "秒，飞跃了" + (level * 2500) + "米");
			break;
		case 3:
			//过了第三关
			// alert("333");
			$(".res").show();
			$(".res .t1").text(t3);
			$(".res .t2").text("已经坚持了" + time + "秒，飞跃了" + (level * 2500) + "米");
			break;
		case 4:
			//过了第四关
			// alert("444");
			$(".res").show();
			// $(".res .t1").text(t3);
			$(".res .t3").text("已经坚持了" + time + "秒，飞跃了" + (level * 2500) + "米");
			break;
	}
}

function treeAnimate() {
	treeTask = setInterval("tree()", 200);
	monkeyTask = setInterval("monkey()", 200);
}

function tree() {
	$(".page1").velocity({
		backgroundPositionY: "+=" + bgspeed + "px"
	}, 200, "linear");
}

function levelRun1() {
	levelDiv1.velocity({
		top: "+=" + bgspeed + "px"
	}, 200, "linear");
}

function levelRun2() {
	levelDiv2.velocity({
		top: "+=" + bgspeed + "px"
	}, 200, "linear");
}

function levelRun3() {
	levelDiv3.velocity({
		top: "+=" + bgspeed + "px"
	}, 200, "linear");
}

function levelRun4() {
	levelDiv4.velocity({
		top: "+=" + bgspeed + "px"
	}, 200, "linear");
}

function levelAnimate1() {
	level1Task = setInterval("levelRun1()", 200);
}

function levelAnimate2() {
	level2Task = setInterval("levelRun2()", 200);
}

function levelAnimate3() {
	level3Task = setInterval("levelRun3()", 200);
}

function levelAnimate4() {
	level4Task = setInterval("levelRun4()", 200);
}

function monkey() {
	var top = $("#monkey").offset().top;
	if (top < 0) {
		speed = 0;
		// $("#monkey").css('top', 0);
		// alert("线断了");
		$(".res").show();
		$(".res .t1").text(t1);
		$(".res .t2").text("已经坚持了" + time + "秒，飞跃了" + (level * 2500) + "米");
		clearInterval(monkeyTask);
		clearInterval(treeTask);
		clearInterval(level1Task);
		clearInterval(level2Task);
		clearInterval(level3Task);
		clearInterval(level4Task);
		clearInterval(timeTask);
		return false;
	}
	if (top > H) {
		gameOver = true;
		return false;
	}
	// console.log( speed +","+ bgspeed);
	$(".page1 #monkey").velocity({
		top: "+=" + (bgspeed + speed) + "px"
	}, 200, "linear");
	speed = 0;
}

//计时器
function timeAnimate() {
	timeTask = setInterval("timer()", 1000);
}

function timer() {
	time++;
	$(".page1 .time").text(time);
	if (time % 10 == 0) {
		bgspeed += 10;
	}
	if (time < 10) {
		level = 0;
	} else if (time == 10) {
		``
		level = 1;
		$(".page1").append(levelDiv1);
		levelAnimate1();
	} else if (time > 10 && time < 20) {
		level = 1;

	} else if (time == 20) {
		clearInterval(level1Task);
		level = 2;
		$(".page1").append(levelDiv2);
		levelAnimate2();

	} else if (time > 20 && time < 30) {
		level = 2;
	} else if (time == 30) {
		clearInterval(level2Task);
		level = 3;
		$(".page1").append(levelDiv3);
		levelAnimate3();
	} else if (time > 30 && time < 40) {
		level = 3;
	} else if (time == 40) {
		clearInterval(level3Task);
		level = 4;
		$(".page1").append(levelDiv4);
		levelAnimate4();
	} else if (time > 40) {
		var top = $("#monkey").css('top');
		top = parseInt(top);
		var monkeyH = $("#monkey").height();
		monkeyH = parseInt(monkeyH);
		var lev4H = levelDiv4.css("top");
		lev4H = parseInt(lev4H);
		if (lev4H > (top + monkeyH)) {
			// alert(lev4H+","+top+"+"+monkeyH+"="+(top+monkeyH));
			gameOver = true;
		}
	}
	if (gameOver) {

		clearInterval(monkeyTask);
		clearInterval(treeTask);
		clearInterval(level1Task);
		clearInterval(level2Task);
		clearInterval(level3Task);
		clearInterval(level4Task);
		//切换DIV
		setGameOver();
		return false;
	}
}
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
		$(".music")[0].play();
	}, this);
	queue.loadManifest([
		'images/1.png',
		'images/bg.jpg',
		'images/start.png',
		'images/reBg.png',
		'images/t.jpg',
		'images/left.png',
		'images/right.png'
	]);
	// loading finish
	$(".musicBtn").addClass("animate");
	$(".musicBtn").on("touchstart", function() {
		var sts = $(this).attr("sts");
		if (sts == 1) {
			$(this).find("img").attr("src", "images/off.png");
			sts = 0;
			$(this).attr("sts", sts);
			$(".music")[0].pause();
			$(".musicBtn").removeClass("animate");
		} else {
			$(this).find("img").attr("src", "images/on.png");
			sts = 1;
			$(this).attr("sts", sts);
			$(".music")[0].play();
			$(".musicBtn").addClass("animate");
		}
	});
	$(".page1,.pageOne").width(W);
	$(".page1,.pageOne").height(H);
	$(".start").on("touchstart", function() {
		$(".pageOne").hide();

	});
	$(".tip").on("touchstart", function() {
		$(this).hide();
		treeAnimate();
		timeAnimate();
	})
	$(".res .share").on("touchstart", function() {
		$(".shareBg").show();
	});
	$(".res .return").on("touchstart", function() {
		window.location.reload();
	});
	$(".res .sign").on("touchstart", function() {
		$(".userInfo").show();
		$(".res").hide();
	});
	$(".shareBg").on("touchstart", function() {
		$(this).hide();
	});
	$(".page1 .btn1,.page1 .btn2").on("touchstart", function() {
		speed -= bgspeed / 2 + 10;
		//t += speed;
	});
	$(".submitDiv").on("touchstart", function() {
		var phone = $(".mobile").val();
		var re = /^1[34589]\d{9}$/;
		var nameInput = $(".realName").val();
		var re2 = /^[\u4e00-\u9fa5]+$/;
		if (re.test(phone) && re2.test(nameInput)) {
			$(".shareBg").show();
			$(".userInfo").hide();
			$(".res").show();
			updateUserInfo();
		} else {
			alert("请按照要求输入!");
		}
	});
	// $(".page1 .btn1").on("touchstart", function() {
	// 	$(".page1 #monkey").removeClass("monketR");
	// 	$(".page1 #monkey").addClass("monkeyL");
	// });
	// $(".page1 .btn2").on("touchstart", function() {
	// 	$(".page1 #monkey").removeClass("monkeyL");
	// 	$(".page1 #monkey").addClass("monketR");
	// });
})