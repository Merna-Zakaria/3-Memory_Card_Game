var cardCollection = [];
var backCardss = [];
var backCards = [];
var sec=00,
    min=00,
    score=0,
    intervalId;
var gameTime =document.getElementById("gametime");
var timeOut=document.getElementById("timeout");
var card=document.querySelectorAll(".card");
var startBtn= document.getElementById("start_btn");
var pauseBtn=document.getElementById("pause_btn");
var resumeBtn=document.getElementById("resume_btn");
var backcardss = document.querySelectorAll(".back_card");
backcards = Array.from(backcardss);

function hide (){
    var arrNew = Array.from(backcardss)
    for(var i=0 ; i < arrNew.length ; i++)
    {
        arrNew[i].style.display = 'none';
        if (i === arrNew.length-1) {
            setTimeout(show,1000)
        }
     }
     startBtn.disabled = true;

     backcards.map(function(element)
    {
        element.addEventListener('click',function (){
            backCards.push(element);
            element.style.visibility = 'hidden';
            var facecards= this.previousElementSibling;
            cardCollection.push(facecards);
            if (cardCollection.length == 2){
               if (cardCollection[0].src == cardCollection[1].src) {
                   score++;
                   if ( score === 6) {
                        onTimeOut();
                   }
                setTimeout(function () {
                    cardCollection[0].style.visibility = 'hidden' ;   
                    cardCollection[1].style.visibility = 'hidden' ;  
                    cardCollection = []; 
                    backCards = []; 

                },1000)
                } else {
                    setTimeout(function () {
                        backCards[0].style.visibility = 'visible' ;   
                        backCards[1].style.visibility = 'visible' ;  
                        backCards = [];
                        cardCollection = []; 
                    }, 800)
                }
            }
        }) ;
    });


}


function onTimeOut(){
   clearInterval(intervalId)
    var cards = Array.from(card);
    for(var i=0 ; i < cards.length ; i++)
        {
            cards[i].style.display = 'none';
        }
        timeOut.style.display = "block";   
        timeOut.innerHTML="congratulations";
       
}

function show () {
    var arrNew = Array.from(backcardss)
    for(var i=0 ; i < arrNew.length ; i++)
        {
            arrNew[i].style.display = 'inline-block'
        }
    intervalId = setInterval(function(){
        sec++;
     gameTime.innerHTML = "Time"+" "+min+":"+sec;
     if(sec==10){
       sec=00;
       min++;
       gameTime.innerHTML = "Time"+" "+min+":"+sec;
    }
    },1000) ;        
}

pauseBtn.addEventListener('click',onpause);
function onpause(){
    console.log(backCards)
    backCards.map(function(ele){
        console.log(ele)
        ele.setAttribute('disabled' , true);
    })
    clearInterval(intervalId);
}

resumeBtn.addEventListener('click',onresume);
function onresume(){
    setInterval(function(){
        sec++;
     gameTime.innerHTML = "Time"+" "+min+":"+sec;
     if(sec==10){
       sec=00;
       min++;
       gameTime.innerHTML = "Time"+" "+min+":"+sec;
    }
    },1000) ;        

}



