// PLOT POINTS:
// 1) Studying at Jack's
// 2) Suspecting Jack is gay
// 3) Trying to get you a private tutor (threatening your relationship)

function Start_Dinner_2(){

	m("안녕 귀염둥이.");
	Show("mom","mom_sit");

	switch($.waiting_action){
		case "eat":
			m("오, 나 없이 먼저 먹기 시작했구나. 참을성이 없구나.");
			n("...네.");
			break;
		case "wait":
			m("먼저 먹어도 되는데 말이지. 음식이 식게 할 필요는 없단다.");
			n("...그렇죠.");
			break;
		case "play":
			m("음식 가지고 장난치는건 어린애나 하는 짓이란다. 알지?");
			n("네, 네.");
			break;
	}

	m("너희 아버지는 늦는구나. 좀 있다가 저녁 먹으러 올 것 같구나.");

	Choose({
		"좋아요. 밥 먹어요.": function(message){
			n(message);
			n("*냠냠냠*");
			m(". . .");
			m("내일 계획은 뭐니?");
			Start_Dinner_2_1();
		},
		"아빠 엄마한데 할 말이 있어요.": function(message){
			n(message);
			m("그래. 아빠 돌아오시면 말해.");
			n("아, 네.");
			m(". . .");
			n("*냠냠냠*");
			m("그래서 내일은 뭘 할거니?");
			Start_Dinner_2_1();
		},
		"엄마한데 우선 말해야 할 것이 있어요.": function(message){
			n(message);
			m("잠깐만, 닉. 오늘 어땠는지 듣지도 못했어.");
			n("오늘은 괜찮았어요.");
			m("그렇구나. 그럼 내일 계획은 뭐니?");
			Start_Dinner_2_1();
		}
	});

}

function Start_Dinner_2_1(){

	n("아. 음... 공부.")
	n("예. 내일 공부할거에요.");
	m("무슨 과목?");
	n("음...");

	Choose({
		"화학.": function(message){
			$.studying_subject = "Chemistry";
			Start_Dinner_2_2(message);
		},
		"미적분.": function(message){
			$.studying_subject = "Calculus";
			Start_Dinner_2_2(message);
		},
		"컴퓨터 과학.": function(message){
			$.studying_subject = "Computer Science";
			Start_Dinner_2_2(message);
		}
	});

}

function Start_Dinner_2_2(message){

	n(message);
	m("좋아.");
	m("넌 정말, 정말로 너희 "+$.studying_subject+" 클래스에서 점수를 올릴 수 있을거야.");
	n(". . .");
	m("그래서 저는 내일 도서관에 있을거에요.");
	m("거기서 너랑 만나도 되겠니?");
	n("사실은 잭네 집에서 공부할거에요.");
	m("또?");
	m("넌 걔랑 너무 많이 시간을 보내는구나.");

	Choose({
		"그낭 같이 공부할 뿐이에요": function(message){
			$.relationship = "study";
			Buddy_1(message);
		},
		"엄마, 잭은... 보통 친구가 아니에요.": function(message){
			
			$.relationship = "best friend";
			n(message);
			
			$.lying_about_hanging_out = true;
			m("오, 베프인가 하는 거야?");
			n("음--");
			m("그래서 공부하려는게 아니라 집에 들릴려는 거구나.");
			n("공부한다구요!");
			m(". . .");
			m("그래, 거짓말만 하지 말거라.");
			n("안해요.");
			Buddy_1_point_5();
		},
		"그래 뭐, 그게 좋은 친구가 하는 것이지.": function(message){
			$.relationship = "friend";
			Buddy_1(message);
		}
	});

}


///////////////////////////////////////
////// 2) SUSPECTING Jack IS GAY ///////
///////////////////////////////////////


function Buddy_1(message){
	n(message);

	if($.relationship!="study"){
		$.lying_about_hanging_out = true;
		m("그래서 공부하려는게 아니라 집에 들릴려는 거구나.");
		n("공부한다구요!");
		m(". . .");
		m("그래, 거짓말만 하지 말거라.");
		n("안해요.");
	}else{
		m("그래, 이제 알겠구나.");
		n("네... 뭘요?");
	}

	Buddy_1_point_5();
}

function Buddy_Caught_Lying_1(message,callback){
	n(message);
	m("잠깐...");
	m("너는 '그냥 같이 공부한다'고 말했지.");
	m("너희 둘이 친구라고는 말하지 않았잖니.");
	$.lying_about_relationship = true;
	Choose({
		"아, 그냥 공부친구라는 뜻이였어요.": callback,
		"뭐 친구이기도 하죠": callback,
		"아니, 맨날 친구라고 말했잖아요.": callback
	});
}

function Buddy_1_point_5(){

	m("그냥... 걔 주변에 너무 있지 말거라.");
	m("사람들은 잘못된 생각을 가질 수 있단다");

	Choose({
		"오. 아니에요. 그냥 친구라구요.": function(message){
			if($.relationship=="study" && !$.lying_about_relationship){
				Buddy_Caught_Lying_1(message,Buddy_2);
			}else{
				Buddy_2(message);
			}
		},
		"잘못된 생각이 좋은 생각일수도 있죠.": Buddy_4,
		"잘못된 생각....무슨 뜻이에요?": Buddy_3
	});

}

function Buddy_2(message){
	n(message);
	m("좋아.");
	if($.lying_about_relationship){
		m("그냥 거짓말만 하지 말거라.");
		n("안해요.");
		m(". . .");
		m("그런데... 잭이랑 같이 있는 것에 대해서 말인데.");
	}
	m("어떤 사람들은 그런걸 받아들일 수도 있겠지만...");
	m("너 아니... 걘 마치....");
	m("게이같아.");
	Buddy_Choice();
}

function Buddy_3(message){
	n(message);
	m("그냥 단지 엄마랑 아들 사이에서 걔는... 너도 알겠지만...");
	n("아니, 뭐요?");
	m("게이!");
	m("걔는 생긴거나 말하는게 게이같아.");
	Buddy_Choice();
}

function Buddy_4(message){
	n(message);
	m("그거 젠 일 같구나. 그렇지?");
	n("음.");
	m("젠은 일반인이지만 네 학급 친구 잭은...");
	m("...너도 알겠지만 일반인처럼 보이지는 않지?");
	Choose({
		"게이라고 생각하시는거죠.": function(message){
			n(message);
			m("그래!");
			m("너도 그렇게 생각했구나!");
			Buddy_Choice();
		},
		"친구한데 그런 말 하지 마세요!": function(message){

			if($.relationship=="study" && !$.lying_about_relationship){
				Buddy_Caught_Lying_1(message,function(message){

					n(message);
					m("그래.");
					m("거짓말만 하지 말거라.");
					n("안해요.");
					m(". . .");

					m("그치만 괜찮아. '정상이 아닌' 것처럼 보이는건 나쁘다고 네가 동의해도.");
					n("난 그런말 한 적--");
					m("그리고 난 널 돌봐줄 뿐이란다. 왜냐면 그는 마치, 너도 알겠지만..");
					m("게이처럼 행동하니까.");
					Buddy_Choice();

				});
			}else{

				n(message);
				m("난 그냥 솔직해지려고 한단다.");
				m("그치만 괜찮아. '정상이 아닌' 것처럼 보이는건 나쁘다고 네가 동의해도.");
				n("난 그런말 한 적--");
				m("그리고 난 널 돌봐줄 뿐이란다. 왜냐면 그는 마치, 너도 알겠지만..");
				m("게이처럼 행동하니까.");
				Buddy_Choice();

			}

		},
		"무슨 말이에요? 정상이 아니라니?": Buddy_3
	});
}

function Buddy_Choice(){
	if($.relationship=="friend"){
		m("그리고 네가 그를 '좋은 친구'라고 말하니까...");
		m("너도 걔처럼 게이라고 사람들이 생각할지도 몰라.");
	}
	if($.relationship=="best friend"){
		m("그리고 네가 그를 베프라고 부르니까...");
		m("너도 걔처럼 게이라고 사람들이 생각할지도 몰라.");
	}
	Choose({
		"하, 게이처럼 행동하긴 하죠. 진짜 게이는 아니지만.": function(message){
			n(message);
			m("그렇지? 너도 뭔가 올바르지 않은게 있다고 생각하는구나.");
			n("...그래요.");
			Buddy_Aftermath();
		},
		"게이가 뭐가 문제에요?!": function(message){
			n(message);
			m("아냐, 문제없지.");
			Buddy_Aftermath();
		},
		"아마도... 친구는 게이일지도 모르죠.": function(message){

			if($.relationship=="study" && !$.lying_about_relationship){
				Buddy_Caught_Lying_1(message,function(message){
					n(message);
					m("좋아");
					m("거짓말만 하지 말거라.");
					n("안해요.");
					m(". . .");
					Buddy_Aftermath();
				});
			}else{
				n(message);
				Buddy_Aftermath();
			}
			
		}
	});
}


function Buddy_Aftermath(){

	m("날 나쁘게 말하지 말거라.");
	m("그런 류의 사람들이 나쁘다고 말하는게 아니란다!");
	m("난 그저... 네가 그런 사람들과 함께 있는 것을 좀 더 조심해야 된다고 생각한단다.");
	m("너도 알겠지만 잭은 널 초대하려고할거야.");

	Show("clock_time","clock_1910");
	Show("nicky","dinner_nicky_defiant");

	Choose({
		"네?": Buddy_Aftermath_2,
		"네에?": Buddy_Aftermath_2,
		"네에에에에에에에에?": Buddy_Aftermath_2
	});
}

function Buddy_Aftermath_2(message){
	
	n(message);

	n("도대체 무슨...");
	n("아니에요. 신경끄세요.");
	m("닉, 널 기분 나쁘게 해서 미안하구나.");
	n("아니, 엄마. 그만 두세--");
	m("성적 이야기로 돌아가자.");
	m("그래서 내일 뭘 공부한다고 했지?");

	Show("nicky","dinner_nicky_sit");
	n(". . .");
	n("으음...");

	Choose({
		"컴퓨터 공학?": function(message){
			$.studying_subject_2 = "Computer Science";
			Grades_Start(message);
		},
		"화학?": function(message){
			$.studying_subject_2 = "Chemistry";
			Grades_Start(message);
		},
		"미적분?": function(message){
			$.studying_subject_2 = "Calculus";
			Grades_Start(message);
		}
	});

}


//////////////////////////////////////////
////// 3) A POSSIBLE PRIVATE TUTOR ///////
//////////////////////////////////////////

function Grades_Start(message){
	n(message);
	m(". . .");
	if($.studying_subject!=$.studying_subject_2){
		Grades_Start_1();
	}else{
		Grades_Start_2();
	}
}

function Grades_Start_1(){
	m("넌 처음에 "+$.studying_subject+"이라고 했지.");
	m("지금은 "+$.studying_subject_2+"이라고 하는구나?");
	$.lying_about_studying = true;
	n("엄마, 난 그냥 헷갈릴 뿐이였--");
	if($.lying_about_hanging_out || $.lying_about_relationship){
		m("오늘 저녁동안 두번이나 거짓말하는구나.");
		n("난 거짓말하지 않았어.");
	}
	m("어쨌든간에 두 성적 다 점수가 처참하구나.");
	n(". . .");
	Grades_Explaining();
}

function Grades_Start_2(){
	m("너 잠시 멈칫했구나.");
	n("밥먹고 있어요.");
	m("그래.");
	if($.lying_about_hanging_out){
		m("난 네가 잭이랑 같이 공부하는지 아니면 어디 놀러가는지 궁금하구나.");
		n("공부해요.");
	}
	m(". . .");
	m("어쟀든, "+$.studying_subject_2+" 수업 성적이 처참하구나.");
	n(". . .");
	Grades_Explaining();
}

function Grades_Explaining(){
	Start_Dinner_3();
}
