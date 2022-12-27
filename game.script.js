const container = document.getElementById('container')
const intro = document.getElementById('intro')
const box = document.getElementById('box')
const startEasy = document.getElementById('easy_bg')
const startMedium = document.getElementById('medium_bg')
const startHard = document.getElementById('hard_bg')
const difficulty_level = document.getElementById('difficulty')
const beginning_game = document.getElementById('beginning')
const table_game = document.getElementById('table')
const card_game = document.getElementById('card')
const question_game = document.getElementById('question')
const question_question = document.getElementById('Answer')
const answer_game0 = document.getElementById('AnswerA')
const answer_game1 = document.getElementById('AnswerB')
const answer_game2 = document.getElementById('AnswerC')
const answer_game3 = document.getElementById('AnswerD')
const footer = document.getElementById('footer')
let score = document.getElementById('score')



startEasy.addEventListener('click', startEasyGame)
startMedium.addEventListener('click', startMediumGame)
startHard.addEventListener('click', startHardGame)

let result = 0;
let click= 0;
let position = 0;


answer0 = null;
answer_game0.addEventListener('click', function(){
		checkAnswer(this, answer0);
	});
	
answer1 = null;
answer_game1.addEventListener('click', function(){
		checkAnswer(this, answer1);
	});
	
answer2 = null;
answer_game2.addEventListener('click', function(){
		checkAnswer(this, answer2);
	});
	
answer3 = null;
answer_game3.addEventListener('click', function(){
		checkAnswer(this, answer3);
	});

	
function ResetResult()
{
result = 0;
click = 0;
document.getElementById("score").innerHTML = "Score: "+result;	
}
function newGame()
{
 window.location.reload(true);
}
function end_end()
{
	setTimeout(function()
	{
		document.getElementById('container').style.display="none";
		container.classList.add('hide')
		table_game.classList.add('hide')
		box.classList.add('hide')
		document.getElementById('footer').style.position="absolute";
		
		end = '<div class="endBox" id="End"><div id="text_end"></div><div id="again" onclick="newGame()">Zagraj ponownie</div></div>';
		document.getElementById("table_result").innerHTML = end;
		
		if(result == 0)
		{
			document.getElementById("text_end").innerHTML = "Chyba coś poszło nie tak! <br> Twój wynik to: <br> " +result+ " punktów!";
		}
		else
		{
			document.getElementById("text_end").innerHTML = "Brawo udało Ci się! <br> Twój wynik to: <br> " +result+ " punktów!";
		}
	},6000);
}

function StartGame()
{
	container.classList.add('flexible')
	intro.classList.add('hide')
	intro.classList.remove('flexible')
	beginning_game.classList.add('hide')
	table_game.classList.remove('hide')
	score.classList.remove('hide')
	difficulty_level.classList.remove('hide')	
}

function startEasyGame() 
{
	StartGame()
	easyTable()
}


function startMediumGame() 
{
	StartGame()
	mediumTable()
}


function startHardGame() 
{
	StartGame()
	hardTable()
}

function easyTable()
{
	card_game.classList.add('hide')
	
	var square_easy = "";
	
	for(i=0; i<=4; i++)
	{
		var number = i;
		square_easy = square_easy + '<div class="floor_easy animate__animated animate__zoomIn" id ="sign_easy'+number+'"  onclick="showCards1('+number+')">50 </div>';
		
	}
	ResetResult()
	document.getElementById("table").innerHTML = square_easy;
	
	
}

function mediumTable()
{
	card_game.classList.add('hide')
	
	var square_medium = "";
	
	for(i=0; i<10; i++)
	{
		var number = i;
		
		if(i<=4)
		{
		square_medium = square_medium + '<div class="floor_medium animate__animated animate__zoomIn" id ="sign_medium'+number+'"  onclick="showCards2('+number+')">50</div>';
		}
		
		if(i>4 && i<=9)
		{
		square_medium = square_medium + '<div class="floor_medium animate__animated animate__zoomIn" id ="sign_medium'+number+'"  onclick="showCards2('+number+')">100</div>';
		}
		
		if((i+1) % 5 ==0) 
		{ 
			square_medium = square_medium + '<div style="clear:both;" ></div>'
		}
		
	}
	ResetResult()
	document.getElementById("table").innerHTML = square_medium;
	
}


function hardTable()
{
	card_game.classList.add('hide')
	
	var square_hard = "";
	
	for(i=0; i<20; i++)
		
	{
		var number = i;
		
		if(i<=4)
		{
		square_hard = square_hard + '<div class="floor_hard animate__animated animate__zoomIn"  id="sign_hard'+number+'" onclick="showCards3('+number+')">50</div>';
		}
		
		if(i>4 && i<=9)
		{
		square_hard = square_hard + '<div class="floor_hard animate__animated animate__zoomIn"  id="sign_hard'+number+'" onclick="showCards3('+number+')">100</div>';	
		}
		
		if(i>9 && i<=14)
		{
		square_hard = square_hard + '<div class="floor_hard animate__animated animate__zoomIn"  id="sign_hard'+number+'" onclick="showCards3('+number+')">150</div>';	
		}
		
		if(i>14)
		{
		square_hard = square_hard + '<div class="floor_hard animate__animated animate__zoomIn"  id="sign_hard'+number+'" onclick="showCards3('+number+')">200</div>';	
		}
		
		if((i+1) % 5 ==0) 
		{ 
			square_hard = square_hard + '<div style="clear:both;" ></div>'
		}	
		
	}
	ResetResult()
	document.getElementById("table").innerHTML = square_hard;
	
}


function showCards1(_position)
{
	
	position = _position;
	
	
	card_game.classList.remove('hide');
	question_game.innerText = questions[position].question;
	
	answer_game0.innerText = questions[position].answers[0].text;
	answer0 = questions[position].answers[0];
	
	
	answer_game1.innerText = questions[position].answers[1].text;
	answer1 = questions[position].answers[1];

	
	answer_game2.innerText = questions[position].answers[2].text;
	answer2 = questions[position].answers[2];

	
	answer_game3.innerText = questions[position].answers[3].text;
	answer3 = questions[position].answers[3];
	
	
	let sign_easy_number = "sign_easy"+position;
	document.getElementById(sign_easy_number).style.visibility="hidden";
	
	click++
	if(click == 5)
	{
		end_end()
	}
}
 



function showCards2(_position)
{
	
	position = _position;
	
	
	card_game.classList.remove('hide');
	question_game.innerText = questions[position].question;
	
	answer_game0.innerText = questions[position].answers[0].text;
	answer0 = questions[position].answers[0];
	
	
	answer_game1.innerText = questions[position].answers[1].text;
	answer1 = questions[position].answers[1];

	
	answer_game2.innerText = questions[position].answers[2].text;
	answer2 = questions[position].answers[2];

	
	answer_game3.innerText = questions[position].answers[3].text;
	answer3 = questions[position].answers[3];
	
	
	let sign_medium_number = "sign_medium"+position;
	document.getElementById(sign_medium_number).style.visibility="hidden";
	
	click++
	if(click == 10)
	{
		end_end()
	}
}

function showCards3(_position)
{
	
	position = _position;
	
	
	card_game.classList.remove('hide');
	question_game.innerText = questions[position].question;
	
	answer_game0.innerText = questions[position].answers[0].text;
	answer0 = questions[position].answers[0];
	
	
	answer_game1.innerText = questions[position].answers[1].text;
	answer1 = questions[position].answers[1];

	
	answer_game2.innerText = questions[position].answers[2].text;
	answer2 = questions[position].answers[2];

	
	answer_game3.innerText = questions[position].answers[3].text;
	answer3 = questions[position].answers[3];
	
	

	let sign_hard_number = "sign_hard"+position;
	document.getElementById(sign_hard_number).style.visibility="hidden";
	
	click++
	if(click == 20)
	{
		end_end()
	}
}
 


function checkAnswer(e, answer)
{ 
	
	if(answer.correct == false)
	{
		e.classList.add('red')
		setTimeout(function()
		{
			card_game.classList.add('hide')
			e.classList.remove('red')
		},1000);
		
	}
	else
	{
		e.classList.add('green')
		if(position <= 4)
		{
			result += 50;
				
		}
		else if(position <= 9)
		{
			result += 100;
			
		}
		else if(position <= 14)
		{
			result += 150;
			
		}
		else if(position <= 19)
		{
			result += 200;
			
		}
		document.getElementById("score").innerHTML = "Score: " + result
		setTimeout(function()
		{
			card_game.classList.add('hide')
			e.classList.remove('green')
		},1000);
	}

	
}


const questions = [ 
{
	question: "1.Jaka jest stolica Polski?",
	answers:  [ 
	{text: "A.Kraków", correct: false},
	{text: "B.Warszawa", correct: true},
	{text: "C.Wrocław", correct: false},
	{text: "D.Szczecin", correct: false}
	]
},
{
	question: "2.Które województwo jest największe?",
	answers:  [ 
	{text: "A.Wielkopolskie", correct: false},
	{text: "B.Małopolskie", correct: false},
	{text: "C.Mazowieckie", correct: true},
	{text: "D.Lubelskie", correct: false}
	]
},
{
	question: "3.Największą wyspą Europy jest?",
	answers:  [ 
	{text: "A.Islandia", correct: false},
	{text: "B.Irlandia", correct: false},
	{text: "C.Spitsbergen", correct: false},
	{text: "D.Wielka Brytania", correct: true}
	]
},
{
	question: "4.Jaka jest waluta w Polsce?",
	answers:  [ 
	{text: "A.Euro", correct: false},
	{text: "B.Złoty", correct: true},
	{text: "C.Dolar", correct: false},
	{text: "D.Korony", correct: false}
	]
},
{
	question: "5.Jakie barwy widnieją na Polskiej fladze?",
	answers:  [ 
	{text: "A.Biały i pomarańczowy", correct: false},
	{text: "B.Biały i Czerwony", correct: true},
	{text: "C.Czerwony i niebieski", correct: false},
	{text: "D.Niebieski i biały", correct: false}
	]
},
{
	question: "6.Jak jest stolica Niemiec?",
	answers:  [ 
	{text: "A.Monachium", correct: false},
	{text: "B.Berlin", correct: true},              
	{text: "C.Kolonia", correct: false},
	{text: "D.Drezno", correct: false}
	]
},
{
	question: "7.Która wyspa nie należy do Grecji?",
	answers:  [ 
	{text: "A.Kreta", correct: false},           
	{text: "B.Rodos", correct: false},         
	{text: "C.Minorka", correct: true},
	{text: "D.Zakintos", correct: false}
	]
},
{
	question: "8.Które wyspy należą do Hiszpanii?",
	answers:  [ 
	{text: "A.Majorka, Kos, Milos ", correct: false},              
	{text: "B.Zakintos, Teneryfa, Majorka", correct: false},         
	{text: "C.Gran Canaria, Tasos, Naksos", correct: false},
	{text: "D.Lanzarote, Ibiza, Cabrera", correct: true}
	]
},
{
	question: "9.Na ile stanów dzieli się USA?",
	answers:  [ 
	{text: "A.48", correct: false},              
	{text: "B.45", correct: false},         
	{text: "C.51", correct: false},
	{text: "D.50", correct: true}
	]
},
{
	question: "10.Na terenie jakiego kraju leżą góry Andy?",
	answers:  [ 
	{text: "A.Brazylia", correct: false},              
	{text: "B.Gujana", correct: false},         
	{text: "C.Paragwaj", correct: false},
	{text: "D.Wenezuela", correct: true}
	]
},
{
	question: "11.Na jakim kontynencie leży Andora?",
	answers:  [ 
	{text: "A.Europa", correct: true},              
	{text: "B.Ameryka Południowa", correct: false},         
	{text: "C.Afryka", correct: false},
	{text: "D.Azja", correct: false}
	]
},
{
	question: "12.Jaki kraj ma dostęp do morza Tyrreńskiego?",
	answers:  [ 
	{text: "A.Francja", correct: true},              
	{text: "B.Grecja", correct: false},         
	{text: "C.Hiszpania", correct: false},
	{text: "D.Czarnogóra", correct: false}
	]
},
{
	question: "13.Jakie morze znajduje się w Chorwacji?",
	answers:  [ 
	{text: "A.Jońskie", correct: false},              
	{text: "B.Egejskie", correct: false},         
	{text: "C.Tyrreńskie", correct: false},
	{text: "D.Adriatyckie", correct: true}
	]
},
{
	question: "14.Która wyżyna występuje na terenie Polski?",
	answers:  [ 
	{text: "A.Wyżyna Nadwołżańska", correct: false},              
	{text: "B.Wyżyna Besarabska", correct: false},         
	{text: "C.Wyżyna Małopolska", correct: true},
	{text: "D.Wyżyna Azowska", correct: false}
	]
},
{
	question: "15.Która rzeka znajduje się w Polsce?",
	answers:  [ 
	{text: "A.Tygrys", correct: false},              
	{text: "B.Jangcy", correct: false},         
	{text: "C.Narew", correct: true},
	{text: "D.Eufrat", correct: false}
	]
},
{
	question: "16.Która rzeka należy do Europy?",
	answers:  [ 
	{text: "A.Angara", correct: false},              
	{text: "B.Dniepr", correct: true},         
	{text: "C.Kasai", correct: false},
	{text: "D.Logon", correct: false}
	]
},
{
	question: "17.Które jezioro możemy zobaczyć w Polsce?",
	answers:  [ 
	{text: "A.Aralskie", correct: false},              
	{text: "B.Bałchasz", correct: false},         
	{text: "C.Toba", correct: false},
	{text: "D.Drawsko", correct: true}
	]
},
{
	question: "18.Która rzeka nie leży w Afryce?",
	answers:  [ 
	{text: "A.Zambezi", correct: false},              
	{text: "B.Dżuba", correct: false},         
	{text: "C.Wszystkie wymienione znajdują się w Afryce", correct: false},
	{text: "D.Lena", correct: true}
	]
},
{
	question: "19.Na którym kontynencie leży Wyżyna Bije?",
	answers:  [ 
	{text: "A.Afryka", correct: true},              
	{text: "B.Azja", correct: false},         
	{text: "C.Europa", correct: false},
	{text: "D.Australia", correct: false}
	]
},
{
	question: "20.Które jezior jest najgłębsze na świecie?",
	answers:  [ 
	{text: "A.Niasa", correct: false},              
	{text: "B.Morze Kaspijskie", correct: false},         
	{text: "C.Tanganika", correct: false},
	{text: "D.Bajkał", correct: true}
	]
},
]




