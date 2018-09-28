// Plot points:
// Trying to stay overnight.
// Reveal - hippie parents, reading poetry, ...(?)
// Threats -- date your tutor, changing school(?)
// He's distracting you. Movie & Hippies.
// Oh my god, you've been reading my texts!...

function Start_Dinner_3(){

	n("엄마.");

	Choose({
		"그게 잭이랑 더 공부하는 이유야.": Tutor,
		"잘봐, 난 노력하고 있어요. 정말로.": Tutor,
		"성적은 괜찮아요.": Tutor
	});

}

function Tutor(message){

	n(message);
	m("난 너를 걱정했단다. 잭은 좋은 친구는 아니잖니.");

	if($.hippies){
		m("걔 부모가 약물 중독일지도 모른다고 생각한단다...");
		n("뭐라고 말할--");
	}else if($.im_a_poet){
		m("걔가 하는건 모든게 시짓기지.");
		n("뭐라고 말할--");
	}
	
	m("가정교사를 데려왔단다.");
	n("...네?");

	if($.studying_subject!=$.studying_subject_2){
		m("그녀는 "+$.studying_subject+"하고 "+$.studying_subject_2+"을(를) 가르칠거야.");
	}else{
		m("그녀는 "+$.studying_subject+"을(를) 가르칠거야.");
	}

	m("이름은 클레어야. 똑똑하고 예쁘고 백인이지. 너랑 같은 나이이기도 해");

	Choose({
		"잭이랑 만나는걸 그만 두게 하려고 이러시는 거에요?": Tutor_Seeing,
		"그녀랑 맺어주려고 이러시는 거에요?": Tutor_Matchmake,
		"가정교사는 나중에 이야기하면 안되나요?": Tutor_Forget
	});

}

function Tutor_Seeing(message){
	n(message);
	m("미안하다. 잭이랑 <i>만나는</i> 거?");
	m("그런 말을 할 때는 조심하렴. 들리는게 마치...");
	
	Choose({
		"데이트한거 같다구요? 네, 그래요.": function(message){
			n(message);
			m(". . .");
			n(". . .");
			n("...엄마?");
			m(". . .");
			n("거기 누구 없어요?");
			m(". . .");
			Threat_School();
		},
		"난 그냥 잭이랑 만나기만 한다구요.": function(message){
			n(message);
			m("그래, 그냥 그거만 분명하게 하렴.");
			n("네.");
			m(". . .");
			m("클레어는 정말 예쁘단다.");
			n("그래요.");
			m("가슴도 예쁘지.");
			Threat_Tutor();
		},
		"그냥 친.구.사.이 거든요..": function(message){
			n(message);
			m(". . .");
			m("그래.");
			m("네가 그러는걸 본 적이 없다만... 그래.");
			n("우린 친구에요.");

			if($.relationship=="friend"){
				m("\"좋은 친구\"...");
			}
			if($.relationship=="best friend"){
				m("\"베프\"...");
			}

			Threat_Tutor();

		}
	});
}

function Tutor_Matchmake(message){
	n(message);
	m("뭐, 그게 네가 원하는거라면 괜찮아.");
	n("아니에요!");
	m("부끄러워하지 말거라. 너도 남자로 자랐잖니.");
	m("그리고 나중에 손주 여럿을 데리고 오겠지.");

	Choose({
		"그만해요! 아직 클레어랑 만나지도 못했잖아요!": function(message){
			n(message);
			m("아직이지.");
			m("내일 올거야.");
			n("네? 하지만 전 잭이랑 약속했는데--");
			m("네 제일 좋은 옷을 다려놓았단다. 첫 인상이 좋아보이도록 해야지.");
			Threat_Tutor();
		},
		"그 확률은 반반이에요. 전 바이니까요.": function(message){

			$.admit_bisexuality = true;

			n(message);
			m("음. 바이?...");

			Show("nicky","dinner_nicky_defiant");

			n("네. 전 바이섹슈얼이에요.);
			n("그래서 여자와 남자 모드에게 성적으로 이끌림을 느끼죠.");
			m(". . .");
			n(". . .");
			Threat_School();
		},
		"아니, 난 애같은거 안 가질건데요.": function(message){
			n(message);
			m("네가 나이 더 먹으면 마음이 바뀔거야.");
			m("아이를 키우는 것은 멋지단다. 네 아이도 널 우러러볼거야.");
			n("...당연하시겠죠. 나르시스트.");
			m("뭐라구?");
			n("아무것도 아니에요.");
			m(". . .");
			Threat_Tutor();
		}
	});
}

function Tutor_Forget(message){
	n(message);
	m("아니. 이미 클레어가 내일 오도록 약속했거든.");
	n("네?!");
	n("내일 잭이랑 공부하기로 약속했다구요.");
	m(". . .");
	m("잭 집에서 얼마동안 머무를거니?");

	Choose({
		"밤샐건데요.": function(message){
			n(message);
			m(". . .");
			n(". . .");
			n("...엄마?");
			n("이상한거 아니잖아요. 친구끼리 밤새기도 하는데.");
			m(". . .");
			Threat_School();
		},
		"오후까지요.": function(message){
			n(message);
			if($.lying_about_hanging_out){
				m("알겠다. 아까 거짓말했구나.");
				n("네?");
			}else{
				m("...알겠다.");
			}
			m("그냥 걔랑 놀러 나가고 싶은거 뿐이구나.");
			Threat_Tutor();
		},
		"대충 한시간 정도요.": function(message){
			n(message);
			m("공부하기에는 부족한 시간 같은데");
			if($.lying_about_hanging_out){
				m("알겠다. 아까 거짓말했구나.");
				n("네?");
			}
			m("그냥 걔랑 놀러 나가고 싶은거 뿐이구나.");
			Threat_Tutor();
		}
	});
}

function Threat_Tutor(){
	
	Show("nicky","dinner_nicky_defiant");
	
	n(". . .");
	m("클레어는 내일부터 매일 학교 끝나면 널 가르칠거야.");

	Choose({
		"매일이요?! 친구들은 어떻게 해요?!":function(message){
			n(message);
			m("얘야. 내가 네 친구란다.");
			n(". . .");
			m("클레어도 네 친구가 될 수도 있겠지. 어쩌면 친구 이상이 될지도 모르고.");
			n(". . .");
			n("말 다 하셨어요?");
			m("하나 더 있단다.");
			Plot_Twist();
		},
		"알겠어요. 그치만 주말은 자유죠?": function(message){
			n(message);
			m("그래.");
			n("이제 다 해결되는거 같아서 다행이네요.");
			m("...그래.");
			n(". . .");
			m("다만... 하나 더 있단다.");
			Plot_Twist();
		},
		"클레어랑 공부하지 않는다면 어쩌실건가요?": function(message){
			n(message);
			m("뭐, 클레어랑 놀러 다니고 싶다면, 그것도 괜찮겠지.");
			m("널 좀 더 남자답게 만들어준다면 말이야.");
			n("어.");
			m("아.");
			m("하나 더 있단다.");
			Plot_Twist();
		}
	});

}

function Threat_School(){

	$.changing_schools = true;
	
	m("학교를 옮길거란다.");

	Show("nicky","dinner_nicky_outrage");

	n("네?!");
	m("잭만이 아니라 학교의 전부 다 너한데 안 좋은 영향을 주는거 같다.");
	n("진심이세요?");
	m("캐나다 문화는 네가 누군지 헷갈리게 만들고 있어.");

	Show("nicky","dinner_nicky_defiant");

	Choose({
		"아니오, 이건 엄마의 뒤에 있는 아시안 문화겠죠!": function(message){
			n(message);
			m("버릇 없게 굴지 말거라!");
			m("이건 네 문화이기도 해!");
			n(". . .");
			Plot_Twist();
		},
		"자식한데 그런 짓 하면 안되잖아요!": function(message){
			n(message);
			m("버릇 없게 굴지 말거라!");
			m("난 네 엄마야. 너와 함께 하고 싶은 어떤 것이든 할 수 있는 권리가 있어!");
			n(". . .");
			Plot_Twist();
		},
		"어쨌든간에 어느 학교든 퀴어인 사람이 있어요.": function(message){
			n(message);
			m("버릇 없게 굴지 말거라!");
			m("그리고 보거라. 나는 마음을 바꿔서 널 홈스쿨링 하게 할 수도 있어.");
			n(". . .");
			Plot_Twist();
		}
	});

}

function Plot_Twist(){

	m("어제 잭이랑 공부하기로 한 시간이 언제니?");
	m("네가 몰래 영화 보러 간 걸로 안단다.");

	Show("nicky","dinner_nicky_sit");
	n(". . .");

	Show("clock_time","clock_1920");

	Choose({
		"이런, 제 문자 읽었죠?": function(message){
			n(message);
			m("그래. 잭이랑 같이 있지 않을 때 얼마나 똑똑해지는지 보자.");
			Plot_Twist_2();
		},
		"아니에요. 공부했다구요.": function(message){
			n(message);
			m("이런 바보같으니라구.");
			m("문자 다 읽어봤다.");
			Plot_Twist_2();
		},
		"도대체 왜 그런 생각을 하시는거죠?": function(message){
			n(message);
			m("문자를 읽었으니까 그렇지.");
			Plot_Twist_2();
		}
	});

}

function Plot_Twist_2(){

	n(". . .");
	m("저녁 시간 전에 네 방에 들어갔단다.");

	// Dinner_1
	m("네가 계단 밑에서 '"+$.what_you_called_out+"' 라고 고함칠때 네 폰 잠금을 풀고 있었지...");
	m("그리고 잭이랑 주고 받은 문자 다 읽어 봤단다.");
	m("난 네 엄마야. 이건 옳은 짓이야.");

	n(". . .");

	if($.im_a_poet){
		m("이상한 시?");
	}
	if($.hippies){
		m("마리화나 피우는 것에 대해 말하는거?");
	}
	if($.im_a_poet || $.hippies){
		m("엄마한데 거짓말하는걸 돕는 거?");
		m("도대체 내 뒤에서 무슨 다른 걸 더 했니?");
	}

	Choose({
		"이건 나쁜 꿈일거야.": function(message){
			n(message);
			m("'디셉션' 영화처럼 말이니?");
			n("'인셉션'이에요....");
			m("말대꾸하지 말거라.");
			Plot_Twist_3();
		},
		"죄송해요. 죄송해요.": function(message){
			n(message);
			m("용서는 받아줄거야.");
			m("넌 내 아이니까 당연히 용서해줘야지.");
			Plot_Twist_3();
		},
		"엄마 진짜 싫어.": function(message){
			n(message);
			m("괜찮아.");
			m("닉, 난 여전히 널 사랑한단다.");
			Plot_Twist_3();
		},
	});

}

function Plot_Twist_3(){
	Start_Dinner_4();
}
