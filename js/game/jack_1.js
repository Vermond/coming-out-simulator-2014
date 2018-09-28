// PLOT BEATS:
// 1) In medias res talking about Inception
// 2) Thanks for movie, we still up to stay over tomorrow night?
// 3) You need to stop hiding... // Can't even CALL.
// Weave in previous bits of convo pieces.
// Also, FULL CIRCLE with the Inception!
// OKAY, TOO CONVOLUTED, CUT OUT THE DIFFERENT FAMILIES & TYPO parts.

function Start_Jack_1(){
	
	/////// SET UP SCENE ////////

	Show("background","bedroom");
	Show("us","bedroom_us_1");
	Show("light","bedroom_light_1",{x:0,y:159});

	PlaySound("bg","bedroom_1",{loop:-1});

	/////////////////////////////

	j("그리고 그가 단순히 알렸을 때,");
	j("'나 항공사를 샀어.'");
	j("이건 가치를 매길 수 없는 거야!");
	n("그게 그가 말한거야?");
	n("난 극장에서 모두가 웃고 있던 것을 높쳤지.");
	j("너는 자막을 필요로 하거나 귀를 좀 더 자주 청소해야 해.");
	j("그래서 이 결과를 어떻게 해석할래?");

	Choose({
		"이건 다 꿈이야.": Inception_Dream,
		"그는 현실 세계로 돌아와야 해!": Inception_Awake,
		"신경안써. 코브를 마침내 가게 해주었구만.": Inception_Neither
	});

}

function Inception_Dream(message){

	$.inception_answer = "dream";

	n(message);
	j("그래서 그의 모든 리뎀션 스토리가 거짓말이라는거야?");
	n("크고 엄청난 거짓말.");
	j("너 좀 우울한거 같은데 안그래?");

	Choose({
		"그래, 난 그저 슬픔 자루야.": Sadsack,
		"때때로... 그러나 너랑 있을 때는 아니야.": function(message){
			$.im_a_poet = true;

			n(message);
			j("오 니키, 아마추어 시인이야 정말.");
			n("프랑스 빵이랑 와인을 좀 줘.");
			n("내가 들은 것 중에서 가장 시끌벅적한 것이 되어야 하거든.");
			j("아무것도 사과하지 마.");
			n("어쨌든...");
			Thanks();
		},
		"난 그냥 현실주의자일 뿐이야.": function(message){
			$.hippies = true;

			n(message);
			j("넌 삶에서 좀 더 긍정적인 생각을 해야만 해.");
			n("그리고 '너'는 뉴에이지 히피 같은 행동을 멈춰야 해.");
			n("어쨌든...");
			Thanks();
		}
	});

}
function Inception_Awake(message){

	$.inception_answer = "awake";
	$.im_a_poet = true;

	n(message);
	n("그렇지 않다면 영화가 전부 다 거짓말이 되어버릴 거야.");
	n("거짓말 하는 이유가 뭐야?");
	j("오 니키, 아마추어 시인이야 정말.");
	j("너 영화 좋아하니?");

	Choose({
		"어 그럼. 당연하지.": function(message){
			n(message);
			Thanks();
		},
		"음... 가끔은 약간 헷갈리긴 해.": function(message){
			n(message);
			j("그게 목적이라고 믿을게.");
			n("미션 완료.");
			n("어쨌든...");
			Thanks();
		},
		"아뉘이이이이이이": function(message){
			n(message);
			j("그거 긍정이라고 받아들일게.");
			Thanks();
		}
	});

}
function Inception_Neither(message){

	$.inception_answer = "neither";

	n(message);
	j("어?");
	n("그는 천장이 떨어지는지 보지도 않았어!");
	n("거짓말, 진실, 혹은 절반의 진실... 코브는 더 이상 신경쓰지 않아.");
	n("그는 드디어 행복해졌고 그게 다야.");
	j("너 꽤나 시적이거 아니면 꽤 우울한거네.");

	Choose({
		"난 시인이고, 심지어 그것을 몰라.": function(message){

			$.im_a_poet = true;

			n("난 시인이야.");
			n("그리고 나는 사실에 대해서 알지도 못해.");
			j("넌 꽤나 감성적인 기적이구나. 증거는 경험적이지.");
			n("그거 히스테리야.");
			n("어쨌든...");
			Thanks();

		},
		"훗. 난 그냥 슬픔의 자루야": Sadsack,
		"아니면 둘 다든지.":function(message){

			$.hippies = true;
			$.im_a_poet = true;

			n(message);
			n("시는 고통이다. 예술은 괴로움이다.");
			j("너 말하는거 우리 엄마같다.");
			n("너희 부모님은 <i>마치</i> 뉴에이지 히피같네.");
			n("어쨌든...");
			Thanks();

		}
	});

}

function Sadsack(message){
	
	$.sadsack = true;

	n(message);
	j("아, 미안해.");
	j("영화관에서의 작은 데이트가 너한데 격려가 되었니?");
	n("물론!");
	Thanks();

}

function Thanks(){
	
	n("인셉션을 보여주려고 데리고 와 주어서 정말 고맙다!");
	j("천만에, 니키.");
	j("네 이상한 웹게임에서 인셉션 패러디를 해야겠구나!");
	n("뭐, 할지도.");
	n("내일 저녁에 다시 만나자!");

	j("그치만...");
	n("부모님이 나를 밤 늦은 시간에 나가게 해주길 바래야겠지.");

	j("우리가 실제로 영화관에 있는 동안 엄마랑 아빠한데 그냥 공부하고 있었다고 말하지 않았으면 좋겠어.");
	n("난 밤새도록 중간고사를 위해서 밤새 벼락치기할....어?");

	j("넌 이렇게 계속 숨을 수 없어.");
	n("잭...");

	Choose({
		"그들은 절대, 절대 모를거야.": function(message){
			$.coming_out_readiness="no";
			n(message);
			j("정말? 절대로?");
			Hiding();
		},
		"나도 이야기해야 된다고 생각해.": function(message){
			$.coming_out_readiness="yes";
			n(message);
			Hiding();
		},
		"아직 이야기할 준비가 안 됐어.": function(message){
			$.coming_out_readiness="maybe";
			n(message);
			j("준비 되도록 도와줄게.");
			Hiding();
		}
	});

}

function Hiding(){

	j("니키, 이렇게 숨는 것은 네 영혼을 갉아먹는 짓이야.");

	if($.inception_answer=="awake"){
		j("네가 말했듯이 거짓말 속에서 사는 이유가 뭐야?");
	}
	if($.inception_answer=="dream"){
		j("그건... 어땠어... '크고 엄청난 거짓말'?");
	}

	if($.sadsack){
		j("네가 말했을 때 지금 너는 슬픔 자루야?");
		j("난 네가 농담하는걸로 보이지는 않았어. 정말로.");
	}

	n("잭. 봐.");
	j("난 작년에 부모님한데서 나왔지.");
	if($.hippies){
		n("그건 공평만 비교가 아니야.");
		n("내가 말했듯이 너랑 너희 부모님은 새로운 히피야.");
		n("너네 집에 있을 때 모든 연기가 마리아나인지 향인지 말할 수 없어.");
		j("야! 우린 담배만 피운다고!");
		n("헤.");
		j("요점은, 우리 부모님은 내가 나오는걸 도와주셨다는 거지.");
	}else{
		j("그리고 부모님은 아주 많이 협조적이셨어!");
	}

	j("넌 지금 캐나다야. 많은 사람들이 성소수자에 대해서 친근해하지.");
	j("너희 부모님도 널 지지하지 않을 거라고 어떻게 알 수 있니?");

	Choose({
		"아시안 부모들은 그런거 별로 안 좋아해.": Hiding_2,
		"나도 몰라... 시도해본 적 없는거 같다...": Hiding_2,
		"부모님은 공부 빼고는 아무것도 지원 안해줘.": Hiding_2
	});

}

function Hiding_2(message){
	
	n(message);

	if($.coming_out_readiness=="no"){
		n("또다시... 그들은 절대, 아무것도 모를거야.");
	}

	j("넌 믿음의 문제가 있어.");
	j("넌 심지허 전화하는 대신에 나한데 문자를 보냈지...");
	j("...부모님이 들을지도 모른다고 생각했으니까.");

	n("들을려고 할걸!");

	j("이런 형태의 의사소통.");
	j("부정확하고 냉담하며 진정한 연결이 불가능해.");

	if($.im_a_poet){
		n("너도 나 같은 아마추어 시인이구나.");
	}else{
		n("그렇게 나쁘진 않네...");
	}

	if($.coming_out_readiness=="yes"){
		j("너 자신은 부모님께 말할 수 있으면 좋겠다고 말했어");
		j("응.");
	}else{
		j("니키.");
	}
	j("부모님께 말해. 오늘 밤에.");

	Choose({
		"오늘 밤? 절대 안돼.": Hiding_3,
		"휴... 최선은 다할거야.": Hiding_3,
		"난 그냥 조심스럽게 힌트를 줄거야.": Hiding_3
	});

}

function Hiding_3(message){
	
	n(message);
	j(". . .");
	n("나는 너무 부모님을 괴롭히고 싶지 않아.");
	n("내일 밤 너희 집에서 머물 수 있도록 설득해야 해.");
	n("나는 다시 공부하고 있었다고 이야기할게.");
	j(". . .");
	n("저녁 시간이네. 아래층으로 간다.");

	j("야... 나도 동의해.");
	n("뭐?");
	j("영화 엔딩에서 네 생각말이야.");
	switch($.inception_answer){
		case "dream": j("나는 코브가 여전히 꿈꾼다고, 거짓말 속에서 산다고 생각해."); break;
		case "awake": j("나는 콥스가 실제 세계에서 진짜 가족이랑 다시 연결되었다고 생각해."); break;
		case "neither": j("뭐가 중요하겠어. 콥스가 행복하면 됐지."); break;
	}
	n("오.");
	j("그래.");
	if($.coming_out_readiness=="maybe"){
		j("'아직 말할 준비가 안된 것'에 대해 마음을 바꾸기를 바란다.");
	}
	j("안녕. 조만간 문자할게.");

	var insult = "";
	if($.hippies) insult+=" 뉴에이지 히피";
	if($.im_a_poet) insult+=" 아마추어 시인";
	n("안녕.");
	if(insult!=""){
		n(""+insult+".");
	}else{
		n("바보야.");
	}

	Jack_1_End();

}

function Jack_1_End(){
	Clear();
	Start_Dinner_1();
}