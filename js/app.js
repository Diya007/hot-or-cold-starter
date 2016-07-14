$(document).ready(function(){

	var secretNumber;
	var userGuess;
	var originalCount = $("#count").html();
	var orignalList = $('#guessList').html();
	var guessedNum =[];

	function newGame(){
		secretNumber = generateNumber();
		$("#count").html(originalCount);
		$('#guessList').html(orignalList);
		console.log(secretNumber)
	}
	newGame()

	function generateNumber(){
		return Math.floor(Math.random()*100+1);


	}

	$('#guessButton').on("click",function(e){
		e.preventDefault();
		userGuess = $('#userGuess').val()
		//check if user's input is integer 
		for(var i=0;i<guessedNum.length;i++){
			if(guessedNum[i] == userGuess) {
				alert("You already guessed this number!")
				userGuess = $('#userGuess').val('')
				return false;

			}
		}
		if(userGuess%1 !== 0){
			alert("Please input an integer between 1 and 100")
		}
	
		else {
			getFeedback(userGuess);
			guessList();
			guessCount();
		}
	//function都执行完之后才能，输入空白，不然空白会被当做arguement执行
	userGuess = $('#userGuess').val('')
		
		//get feedback about each guess
		//give range feedback
		//appear in h2#feedback
		//count guesses
		//list guessed numbers

	});

	function getFeedback(userGuess){
	    if (secretNumber==userGuess) {
			$('#feedback').text('You are the winner!')
		}
		else if(0 < Math.abs(secretNumber - userGuess) && Math.abs(secretNumber - userGuess) <20) {
			$('#feedback').text('Very hot');
		}
		else if(20< Math.abs(secretNumber - userGuess) && Math.abs(secretNumber - userGuess) < 30){
			$('#feedback').text('Warm');
		} 
		else if(30 <Math.abs(secretNumber - userGuess) && Math.abs(secretNumber - userGuess) < 50){
			$('#feedback').text('Cold')
		} 
		else if((Math.abs(secretNumber - userGuess))>50){
			$('#feedback').text('Ice cold')
		} 
		
	}

	function guessList(){
		userGuess = $('#userGuess').val();
		$('#guessList').append(userGuess+', ');
		guessedNum.push(userGuess);
	}


	function guessCount(){
		var num = parseInt($('#count').text());
		$('#count').text(num+1);
	}

	$('.new').on("click",newGame);
	

})