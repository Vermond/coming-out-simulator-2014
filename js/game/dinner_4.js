// is short
// What ARE you. Fake crying, and don't tell your dad
// Weave it

function Start_Dinner_4(){

	n(". . .");
	m("네 아빠가 거의 집에 오지 않기 때문이야. 그렇지?");
	m("강력한 남성상 모델이 없이는 헷갈릴거야...");

	Choose({
		"네네 아빠는 정말로 굉장한 롤 모델이죠.": function(message){
			n(message);
			m("닉, 이유가 뭐든간에 네 아빠야. 사랑해야지.");
			My_Fault();
		},
		"그런게 아니에요. 난 어쨌든 바이라구요.": function(message){
			n(message);
			m("그걸 어떻게 아니? 네가 심리학 전문가니?!");
			My_Fault();
		},
		"뭘 아세요? 아마 맞을수도 있겠죠.": function(message){
			n(message);
			m("그래...");
			My_Fault();
		}
	});

}

function My_Fault(){
	
	Show("clock_time","clock_1930");

	n(". . .");
	m("이건 다 내 잘못이구나...");
	m("이런 류의 사람들 사이에서 조심하라고 말하는게 너무 늦었구나...");

	Show("mom","mom_cry");

	m("[훌쩍]");
	m("오 닉! 불쌍한 아가!");

	Show("nicky","dinner_nicky_sit");

	Choose({
		"엄마... 울지마요...": Cry_1,
		"가짜 울음 그만두세요.": Cry_2,
		"[울음]": Cry_3
	});
}

function Cry_1(message){

	$.crying = "sympathy";

	n(message);
	m("흑... 흑... 흑...");
	n("잭이랑 거짓말, 모든게 미안해요.");
	m("흐윽... 흐윽...");
	n("되돌려 놓을게요.");
	m("훌쩍...");
	n("...제발...");
	What_Are_You();
}

function Cry_2(message){

	$.crying = "anger";
	Show("nicky","dinner_nicky_defiant");

	n(message);
	m("흑... 흑... 흑...");
	n("진심으로 가짜같거든요.");
	m("흐윽... 흐윽...");
	n("좀 조용히 해줄래요?!");
	m("훌쩍...");
	n("조. 용. 히.");
	What_Are_You();

}

function Cry_3(message){

	$.crying = "mocking";
	Show("nicky","dinner_nicky_outrage");

	n("으아아아아앙");
	m("흑... 흑... 흑...");
	n("엉 엉 엉 엉 엉엉");
	m("흐윽... 흐윽...");
	n("흐엉어엉어어엉 흑흑 흐아아앙 흐윽 흐윽 으아앙");
	m("훌쩍...");

	Show("nicky","dinner_nicky_defiant");
	n("Okay, we done?");
	What_Are_You();

}

function What_Are_You(){

	m(". . .");
	m("닉... 넌 뭐니?");
	n("네?");

	Show("nicky","dinner_nicky_sit");

	Show("mom","mom_sit");
	m("넌 <i>무엇</i>이니?");

	Choose({
		"난 바이섹슈얼이에요.": function(message){

			$.what_are_you = "bisexual";

			n(message);
			if($.admit_bisexuality){
				m("...그러면 네가 말했던 것이...");
			}
			n("남자와 여자 모두에게 성적으로 끌리는 거죠.");
			m("둘다 될수는 없어.")
			m("넌 한쪽을 선택해야만 해.");
			n("그게... 그런 식이 아니에요.");
			Have_You_Had_Sex();

		},
		"그냥 헷갈렸어요.": function(message){

			$.what_are_you = "confused";

			n(message);
			m("...이해한다.");
			m("잭이 널 헷갈리게 했겠지.");
			m("넌 그저 단계를 지나가는 중이란다. 괜찮단다.");
			n(". . .");
			m("괜찮아, 괜찮아...");
			Have_You_Had_Sex();

		},
		"난 엄마 아들이에요, 젠장.": function(message){

			$.what_are_you = "son";

			n(message);
			n(". . .");
			n("이걸로 충분하세요?");
			Have_You_Had_Sex();

		}
	});
}

function Have_You_Had_Sex(){
	m(". . .");
	m("잭이랑 같이 잔 적이 있니?");
	Choose({
		"네.": function(message){
			n(message);
			m("[헛구역질]");
			Have_You_Had_Sex_2();
		},
		"아니오.": function(message){
			n(message);
			m("거짓말은 그만 두렴... 문자를 봤단다...");
			n("문자로만 그런거에요. 실제로는--");
			m("...그리고 사진도...");
			Have_You_Had_Sex_2();
		},
		"말하지 않을거에요.": function(message){
			n(message);
			m("이런... 했구나.");
			Have_You_Had_Sex_2();
		}
	});
}

function Have_You_Had_Sex_2(){

	n(". . .");
	m("누가... 여자니?");

	Show("nicky","dinner_nicky_outrage");

	n("아 제발!");
	n("그거 어떤 젓가락이 숟가락인지 묻는--");
	m("누구니?...");

	Show("nicky","dinner_nicky_defiant");

	Choose({
		"제가 보통 바텀이에요.":function(message){
			$.top_or_bottom = "bottom";

			n(message);
			Throw_Up();
		},
		"잭이요. 대부분은.":function(message){
			$.top_or_bottom = "top";

			n(message);
			m("그-그건... 아직은 괜찮다는 거겠지! 그-그렇지?...");
			m("만약... 안다면... 네가 너의 것을 넣은...");
			m("너의...");
			Throw_Up();
		},
		"바꿔서 해요.":function(message){
			$.top_or_bottom = "versatile";

			n(message);
			Throw_Up();
		}
	});
}

function Throw_Up(){

	PlaySound("sfx","dinner_vomit");

	Show("clock_time","clock_1940");
	Show("mom","mom_vomit");
	Show("table","dinner_table_2");
	Wait(1000);

	Choose({
		"뭐?": Father_Soon,
		"뭐어???": Father_Soon,
		"뭐어어어어어어어엇?": Father_Soon
	});

}

function Father_Soon(message){

	n(message);

	Show("mom","mom_sit");

	m(". . .");
	m("너희 아버지가 곧 오실거다.");
	n("음식이 식었어요. 음, 방금 뒤집은것 빼면요.");
	m("아버지가 늦는구나. 직장에서 스트레스를 많이 받으셨을거다.");
	m("그러니... 제발... 왔을때...");
	m("이 모든 비밀을 지키기로 약속할 수 있겠니?");
	n(". . .");

	m("잭에 대해서는 말하지 말렴.");

	switch($.what_are_you){
		case "bisexual":
			m("네가 바이섹슈얼이라는 걸 아버지한데 말하지 말거라.");
			break;
		case "confused":
			m("너의 성적 관심에 대해 헷갈렸다는 것을 말하지 말거라.");
			break;
		case "son":
			m("잭이랑 그런걸... 했다는 거에 대해서 거짓말한걸 말하지 말거라.");
			break;
	}

	switch($.top_or_bottom){
		case "top":
			m("네가 잭을 여자로 만들었다는 것을 말하지 말렴.");
			break;
		case "bottom":
			m("잭에게 여자처럼 행동했다는걸 말하지 말렴.");
			break;
		case "versatile":
			m("너와 잭 둘이서 여자처럼 행동했다는 것을 말하지 말렴.");
			break;
	}

	m("알겠지?...");

	Choose({
		"네.": function(message){
			$.promise_silence = "yes";
			
			n(message);
			m("그래.");
			m(". . .");
			m("너희 아버지가 오셨구나.");
			Father_Soon_2();
		},
		"아뇨. 안 괜찮아요..": function(message){
			$.promise_silence = "no";
			
			n(message);
			m("닉, 안돼, 제발--");
			m("아 안돼. 너희 아버지가 오셨구나.");
			Father_Soon_2();
		},
		"엄마가 말하지 않는다면요.": function(message){
			$.promise_silence = "tit for tat";
			
			n(message);
			m("안할거란다.");
			n("안한다고 약속해요");
			m("약속--");
			m("쉿. 아버지 오셨다.");
			Father_Soon_2();
		}
	});

}

function Father_Soon_2(){
	Show("nicky","dinner_nicky_sit");
	Start_Dinner_5();
}
