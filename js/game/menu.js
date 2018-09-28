function Start(){

	$ = {};
	
	/////// SET UP SCENE ////////

	Show("background","coffeehouse");
	Show("cup","cup_steam",{x:44,y:359});
	Show("nicky","coffee_nicky_still");

	PlaySound("bg","coffeehouse",{loop:-1, volume:0.7});

	//////////////////////////////

	N("<b>커밍 아웃 시뮬레이터 2014</b>");
	N("반쪽자리 진실에 대한 반쪽 진실 게임.");
	N("이봐 너, 플레이어. 아마도지만 이 게임에 온걸 환영해.");
	N("이제 뭐할거야?");

	Choose({
		"플레이하자고!": Play,
		"넌 누군데? (크레딧)": function(){
			Credits("넌 누구야?");
		},
		"흠. 좀 더 설명해줘. (이 게임에 대해)": function(){
			About("흠, 좀 더 설명해줘.");
		}
	});

}

function SipCoffee(message){
	Show("nicky","coffee_nicky_drink");
	Show("cup",null);
	PlaySound("sfx","coffee_sip");
	p(message);
	Show("nicky","coffee_nicky_still");
	Show("cup","cup_steam");
}

function Play(message){
	
	SipCoffee(message);

	// Asked neither
	if(!$.asked_about && !$.asked_credits){
		N("바로 시작하는구나! 대단해!");
		N("만든 사람에 대한 정보를 읽지도 않고 게임에 대한 정보도 안 보고 그리고--");
		p("쉿.");
		N("괜찮아, 괜찮아.");
	}
	// Asked both
	if($.asked_about && $.asked_credits){
		p(". . .");
		p("왜 가능한 옵션이 하나만 남아있는 때에도 클릭 가능한 옵션을 만들까?");
		N("모르겠네.");
	// Asked either
	}else if($.asked_about || $.asked_credits){
		N("그래. 시작하자!");
	}

	N("4년전인 2010년으로 되돌아갈거야...");
	p("4년 전이라고?!");
	N("...내 삶을 톨째로 바꿔버린 모든 것이 있는 그 곳으로.");

	N("플레이어야 말해봐. 이게 전부 어떻게 끝날것 같아?");

	Choose({
		"꽃이랑 무지개랑 게이 유니콘?": function(message){
			$.main_menu_convo_1 = 1;

			p(message);
			N("그래. 그게 정확히 끝나는 방식이야.");
			p("진짜?");
			N("아니.");
			Play_2();
		},
		"아마 스타벅스에서 너랑 SNS 하려나?": function(message){
			$.main_menu_convo_1 = 2;

			p(message);
			N("이봐, 난 노트북으로 코딩중이라고. 니가 지금 플레이하는 게임으로 돌아와.");
			p("너 분명 미루고 있어.");
			N("말하는 사람을 보라고.");
			p("음..");
			N("어쨌든...");
			Play_2();
		},
		"모두 다 피에 물들겠지": function(message){
			$.main_menu_convo_1 = 3;

			p(message);
			N("미안한데 이야기가 그렇게 끔찍하진 않거든.");
			N("새발의 피일지도 모르지만.");
			p("피....피를 줘.....");
			N("어쨌든간에...");
			Play_2();
		}
	});

}

function Play_2(){

	if(!$.asked_about){
		N("게임에 대해서 부분을 스킵하지 않았으면 이게 엄청 개인적인 이야기라는걸 알고 있겠지.");
		p("쉿.");
	}

	N("이 게임은 나, 부모님, 내 예전 남자친구가 실제로 말했던 대화가 들어있어.");
	N("우리가 가질 수도 있었던, 가졌어야 했던, 그리고 절대 말하지 말았어야 할 것들이야.");
	N("뭐가 뭔지는 중요하지 않아.");
	N("더 이상은.");

	Choose({
		"정답이 없는 게임에서 어떻게 이길 수 있어?": function(message){
			$.main_menu_convo_2 = 2;

			p(message);
			N("확실히.");
			p(". . .");
			Play_3();
		},
		"너 좀 우울한거 같다.": function(message){
			$.main_menu_convo_2 = 1;

			p(message);
			N("'삶'은 약간의 우울과 함께 하지.");
			p("뭐, 맞는 말이야.");
			Play_3();
		},
		"이 '진짜' 게임은 거짓말 투성이야?": function(message){
			$.main_menu_convo_2 = 3;

			p(message);
			N("대화가 100% 맞지 않는다고 해도 아마 여전히 100% 거짓말일거야.");
			p(". . .");
			Play_3();
		}
	});

}

function Play_3(){

	N("넌 2010년의 나로 플레이할거야.");
	if(!$.asked_credits){
		N("너가 크레딧을 스킵했으니 말해두겠는데, 내 (아직 법적이지 않은) 이름은 니키 케이스야. 알아두라고.");
		p("쉿.");
	}

	var whatISay;
	switch($.main_menu_convo_1){
		case 1: whatISay = "이 게임은 게이 유니콘으로 끝나지 않아. "; break;
		case 2: whatISay = "이 게임은 커밍 아웃, 성년 시절 오고가는 때야. "; break;
		case 3: whatISay = "이 게임은 피가 아닌 눈물로 끝나. "; break;
	}
	switch($.main_menu_convo_2){
		case 1: whatISay += "약간 우울해질지도 모르는 것에 대해서는 사과할게."; break;
		case 2: whatISay += "그리고 정답은 없어."; break;
		case 3: whatISay += "그리고 모두 거짓말 투성이지."; break;
	}
	N(whatISay);

	PlaySound("sfx","coffee_sip");
	Show("nicky","coffee_nicky_drink");
	Show("cup",null);

	p("이봐, 그건 말했잖아!");

	// HACK - Just clear dialogue & stuff.
	Wait(1000);
	queue(ClearDialogue,0);

	Wait(500);
	Show("nicky","coffee_nicky_throw");
	PlaySound("sfx","coffee_throw");
	
	Wait(1000);
	Show("nicky","coffee_nicky_still_2");
	Wait(500);
	
	N("플레이할 때...");
	N("단어를 지혜롭게 골라.");
	N("모든 캐릭터는 니가 말하거나 말하지 않은 모든 것을 기억할거야.");
	p("그래. 니가 이 '메인 메뉴'에서 한 선택조차도 말이야.");
	N("정확하게.");

	N(". . .");
	N("몇가지는 기억하기 어렵지는 않을거야.");
	
	Clear();
	Start_Jack_1();

}

function Credits(message){

	$.asked_credits = true;
	
	if($.asked_about){
		SipCoffee(message);
	}else{
		SipCoffee("넌 누구니?");
	}
	
	N("아, 안녕. 내 소개를 할게.");
	N("난 니키 케이스야.");
	N("적법한 이름은 아니야. 그냥 '진짜' 이름일 뿐이지.");

	p("그건 좀 이상한데.");
	if($.asked_about){
		p("그리고 아까 말해준 것처럼, 이게 너의 개인적인 이야기야?");
	}else{
		p("그리고 니가 이 게임을 만들었어?");
	}

	N("그래. 난 이 게임의 작가이자 프로그래머이자 아티스트야. 혼자서 만들었지.");

	if($.asked_about){
		p("이걸 다 너 혼자?");
		p("이전에도 말했고 다시 말할거지만...");
		p("당연하지. 이 나르시스트야.");
		N("전부 내가 한건 아니야.");
		N("사운드랑 오디오는 다양한 퍼블릭 도메인 소스를 사용했어.");
	}else{
		N("사운드랑 오디오는 다양한 퍼블릭 도메인 소스를 사용했어.");
	}

	N("이 게임의 뒤에 있는게 주로 나이긴 하지만...");
	N("...이 게임의 스토리 뒤에는 많은 사람이 있어.");

	if($.asked_about){
		Choose({
			"설명은 그만하고 이제 플레이해보자!": Play
		});
	}else{
		Choose({
			"지금 플레이 할 수 있어?": Play,
			"이 게임 왜 만들었어? (이 게임에 대해서)": function(){
				About("왜 이 게임을 만들었어?");
			}
		});
	}

}

function About(message){

	$.asked_about = true;

	SipCoffee(message);

	if($.asked_credits){
		N("난 내 이야기를 말하고 싶었어.");
	}else{
		N("이 게임...");
		N("...대화 시뮬레이터처럼 보이지만 실은...");
		N("...아주 개인적인 이야기야..");
	}
	
	p("당연하겠지. 나르시스트야.");
	N("뭐, 그렇겠지.");

	if($.asked_credits){
		p("나르시스트 아니야. 나르시스트는 진짜 이름을 쓰겠지.");
		N("내가 말했어. 이건 내 '진짜 이--");
		p("그래, 그래. 이상해하긴.");
	}

	N("#Nar8 게임잼을 위해서 만들었어. 변명과 데드라인을 나한테 줬지.");
	p("마지막 날이 될 때까지 기다려야 하지 않았냐?");
	N("맞아.");
	N("그리고 이 게임은 저작권이 없어. 퍼블릭 도메인으로 배포하거든.");
	N("내 성적 관심처럼 이 소스 코드도 오픈되어 있어.");

	p("그건 끔찍한 말투야.");
	N("'Fork Me' 프로그래밍은 좨뮜뉘?");
	p("하지마아아.");

	if($.asked_credits){
		Choose({
			"그냥 게임이나 하자.": Play
		});
	}else{
		Choose({
			"이상한 말은 됐고 플레이할까?": Play,
			"그래서 넌 누군데? (크레딧)": function(){
				Credits("그래서 넌 누군데?");
			}
		});
	}

}