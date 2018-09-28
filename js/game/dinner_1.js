function Start_Dinner_1(){

	/////// SET UP SCENE ////////

	Show("background","dinner");
	Show("clock","clock_ticking",{x:155,y:294});
	Show("clock_time","clock_1855",{x:155+5,y:294+37});
	Show("nicky","dinner_nicky_sit",{x:0,y:300});
	Show("dad",null,{x:0,y:300});
	Show("mom",null,{x:0,y:300});
	Show("table","dinner_table",{x:0,y:420});

	PlaySound("clock","dinner_ticking",{loop:-1});

	////////////////////////////

	Wait(2500);
	n("다들 어디야?...");
	n(". . .");

	Choose({
		"엄마아아아?": Waiting_1,
		"아빠아아아?": Waiting_1,
		"저기, 아무도 없어요?": Waiting_1
	});

}

function Waiting_1(message){
	
	$.what_you_called_out = message;
	n(message);

	n(". . .");

	Choose({
		"[뭔가 먹는다]": function(message){
			$.waiting_action = "eat";
			Waiting_2(message);
		},
		"[좀 더 기다린다]": function(message){
			$.waiting_action = "wait";
			Waiting_2(message);
		},
		"[음식을 가지고 논다]": function(message){
			$.waiting_action = "play";
			Waiting_2(message);
		}
	});

}

function Waiting_2(message){
	
	n(message);
	n(". . .");

	PlaySound("clock","dinner_meowing",{loop:-1});

	Show("clock","clock_meowing");
	Show("clock_time","clock_1900");
	Wait(1000);

	Show("nicky","dinner_nicky_defiant");

	Choose({
		"오늘도 처량하게 똑닥이는 똑닥 시계. 앲애고 싶다. 똑닥 소리.": function(message){
			n(message);

			Show("mom","mom_stand");
			Show("clock","clock_ticking");
			PlaySound("clock","dinner_ticking",{loop:-1});

			if($.im_a_poet){
				m("친구한데서 시를 배웠니?");
			}else{
				m("시적인데.");
			}

			Show("nicky","dinner_nicky_sit");
			n("아, 엄마.");
			
			Waiting_End();
		},
		"아, 왜 저런걸 가져왔지?": function(message){
			n(message);

			Show("mom","mom_stand");
			Show("clock","clock_ticking");
			PlaySound("clock","dinner_ticking",{loop:-1});

			m("너희 할아버지가 주셨단다.");

			Show("nicky","dinner_nicky_sit");
			n("아, 엄마.");
			
			Waiting_End();
		},
		"야옹! 야옹! 야옹! 야옹!": function(message){
			
			n("야옹.");
			n("야옹!");

			Show("nicky","dinner_nicky_outrage");
			n("야옹!");

			Show("mom","mom_stand");

			m("닉, 뭐하는 거니?...");

			Show("clock","clock_ticking");
			PlaySound("clock","dinner_ticking",{loop:-1});
			Show("nicky","dinner_nicky_sit");

			n("에헴, 아무것도 아니에요. 엄마.");

			Waiting_End();
		}
	});

}

function Waiting_End(){
	Start_Dinner_2();
}