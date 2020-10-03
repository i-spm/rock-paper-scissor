//challenge 1 
function ageinDays(){
var birthYear=prompt("what year were you born?: ");
var ageInDayss=(2020-birthYear)*365
var h1=document.createElement('h1');
var textAnswer=document.createTextNode('you are '+ ageInDayss+' days old');
 h1.setAttribute('id','ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);

}

function reset(){
     document.getElementById('ageInDays').remove();
    // document.getelementById('flex-box-result').remove();
}
function catGenerator(){
    var image=document.createElement('img');
    var div=document.getElementById('flex-cat-gen');
  image.src="https://image.shutterstock.com/image-photo/cat-medical-mask-protective-antiviral-600w-1684423789.jpg";
 div.appendChild(image);

 
}

function rpsGame(yourChoice){
  console.log(yourChoice);
   var humanChoice,botChoice;
   humanChoice =yourChoice.id;
  botChoice= numberToChoice(randToRpsInt());

  results=decideWinner(humanChoice, botChoice);
  console.log(results);
  console.log('computerChoice', botChoice);
  message=finalMessage(results);

 // rpsFrontEnd(yourChoice,botChoice,message);
}

function randToRpsInt(){
  return Math.floor(Math.random() *3);
}

function numberToChoice(number) {
  return ['rock' ,'paper' ,'Scissor'][number];
}

function decideWinner(yourChoice, computerChoice){

  var rpsDatabase = {
      
    'rock':{'Scissor':1,'rock':0.5, 'paper':0},
    'paper':{'rock':1,'paper':0.5, 'Scissor':0},
    'Scissor':{'paper':1,'Scissor':0.5, 'rock':0}
  }

  var yourScore=rpsDatabase[yourChoice][computerChoice];
  var computerScore=rpsDatabase[computerChoice][yourChoice];

   return [yourScore, computerScore];
}

function finalMessage([yourScore]){
  if(yourScore==0){
    return {'message': 'you lost' ,'color':'red'};
    
  }else if(yourScore==0.5){
    return {'message': 'you tied', 'color':'yellow'};

  } else {
    return {'message': 'you won', 'color':'green'};
  }
}
