var humanChosenColor;
var nextPlayerHuman = true;
var botColor;


//Start Game
document.querySelector("#pickSides").style.display = "none";


window.onload = function(){

    document.querySelector(".container").style.visibility="hidden";
    document.querySelector("body > section").innerHTML= "Start Game <br>";
    var button = document.createElement("button");
    document.querySelector("body > section").appendChild(button);
    document.querySelector("body > section > button").addEventListener('click', function(){

    document.querySelector("body > section").innerHTML= "";
   // console.log(document.getElementById('pickColor'))
    var chooseColor = document.querySelector("#pickColor");
    document.querySelector("body > section").style.display="none"


    var human = [];
    human.push(chooseColor.childNodes[3])
    human.push(chooseColor.childNodes[5])
    human.forEach((e, index) => {

        e.onclick = function (){
            
            //console.log(event)
            alert('you have chosen' + event.path[0].childNodes[0].data);
            event.path[0].classList.add('selectedColor')
            humanChosenColor = event.path[0].style.backgroundColor;

           var nextSib = event.path[0].nextElementSibling;
           var previousSib = event.path[0].previousElementSibling
            
            humanChosenColor = event.path[0].style.backgroundColor;

            if(e.id == 'playerColorA'){ //pick color
                botColor = nextSib.style.backgroundColor
                //console.log(botColor)
                
            }else if(e.id == 'playerColorB'){ //pick color
               botColor = previousSib.style.backgroundColor
               // console.log(botColor)   
            }

             document.querySelector(".container").style.visibility = "visible";
             chooseColor.style.visibility= "hidden";  
             
        }
        
    })

    humanPlaying() //human starts game 

})

}

    
var btnLeft = document.querySelector("#pickSides > ul > li:nth-child(1) > button")
var btnTop = document.querySelector("#pickSides > ul > li:nth-child(2) > button")
var btnRight = document.querySelector("#pickSides > ul > li:nth-child(3) > button")
var btnBottom = document.querySelector("#pickSides > ul > li:nth-child(4) > button")


var pickLine;
var box;
var clickedBlock = document.querySelectorAll("body > div > div");
var pickAgain = document.querySelector("#pickSides").cloneNode(true)
var cantTouchThis;

       function humanPlaying(){ //Play Game (human) - if any box clicked this is a humans turn
        document.querySelector("body > section").display="block"

        

        if(nextPlayerHuman){

                clickedBlock.forEach((e, index) => {
                e.onclick = (event) => { 
                box = index + 1;  
                //console.log("You clicked button number " + box);
                pickLine = e;
                e.style.backgroundColor = "yellow";
                e.classList.add('preSelectedHumanBox')
                

                chooseLine();  
                
                }
                
  })
}           
    
}       

    
//human choose line that they want to play
  function chooseLine(){
      //console.log(pickLine)
      
      var playModule = document.querySelector("body > section")
      playModule.style.display ="block";
      var nextTurn = document.querySelector("#pickSides").cloneNode(true)

      playModule.innerHTML = "You Have Selected Box " + box + "<br>Please select the line you want to play"
     // let human know what line they have decided
      nextTurn.style.display = "block";
      
      document.querySelector("body > section").appendChild(nextTurn)
      //console.log(nextTurn)
      nextTurn.style.display= "block"; //at end of turn close body section container
   
      
     var sides = document.querySelector("#pickSides > ul")


      sides.addEventListener('click',function(e){

        if(e.target.innerHTML.indexOf("Left") > -1  && pickLine.style.borderLeftColor == ''){
            alert('You have selected the left border')
            pickLine.style.cssText += "border-left-color" + ":" + humanChosenColor
            //pickLine.style.borderLeftColor = humanChosenColor;
            pickLine.style.borderLeftWidth=  "13px";
            document.querySelector("body > section").style.display= "none";
            console.log(cantTouchThis)
            playBot() //after human selects , bot selects
    
        }else if(e.target.innerHTML.indexOf("Left") > -1 && !pickLine.style.borderLeftColor == ''){
            alert('You have selected the left border - you cant choose this')

        }

        if(e.target.innerHTML.indexOf("Top") > -1  && pickLine.style.borderTopColor == ''){
            alert('You have selected the top border')
            pickLine.style.cssText += "border-top-color" + ":" + humanChosenColor
            // pickLine.style.borderTopColor = humanChosenColor;
             pickLine.style.borderTopWidth ="13px";
             document.querySelector("body > section").style.display = "none";
             e.stopPropagation();
             playBot() //after human selects , bot selects

            
        }else if(e.target.innerHTML.indexOf("Top") > -1 && !pickLine.style.borderTopColor == ''){
            alert('You have selected the top border - you cant choose this')

        }

        if(e.target.innerHTML.indexOf("Right") > -1  && pickLine.style.borderRightColor == ''){
            alert('You have selected the right border')
            pickLine.style.cssText += "border-right-color" + ":" + humanChosenColor

            // pickLine.style.borderRightColor = humanChosenColor
             pickLine.style.borderRightWidth = "13px";
             document.querySelector("body > section").style.display = "none";
             e.stopPropagation();
             playBot() //after human selects , bot selects

        }else if(e.target.innerHTML.indexOf("Right") > -1 && !pickLine.style.borderRightColor == ''){
            alert('You have selected the right border - you cant choose this')

        }

         if(e.target.innerHTML.indexOf("Bottom") > -1 && pickLine.style.borderBottomColor == ''){
            alert('You have selected the bottom border')
            pickLine.style.cssText += "border-bottom-color" + ":" + humanChosenColor

             //pickLine.style.borderBottomColor = humanChosenColor;
             pickLine.style.borderBottomWidth = "13px";
             document.querySelector("body > section").style.display = "none";
             e.stopPropagation();
             playBot() //after human selects , bot selects
            
        }else if(e.target.innerHTML.indexOf("Bottom") > -1 && !pickLine.style.borderBottomColor == ''){
            alert('You have selected the bottom border - you cant choose this')

        }

        if(!pickLine.style.borderLeftColor == '' && !pickLine.style.borderTopColor == '' && !pickLine.style.borderBottomColor == '' && !pickLine.style.borderRightColor == ''){

            pickLine.style.backgroundColor =  "pink";
            pickLine.id = "noMoreMoves"
            //this box is finished
            
            }
        
    })
    
  }
  

  function playBot(){

    var botBox = clickedBlock[Math.floor(Math.random()*clickedBlock.length)]; //bot pick random block
    botBox.id = "botChosen"; // add ID to bot selected box

    botBox.style.backgroundColor = "#f1ab21"

    // if(botBox.outerHTML.indexOf("preSelectedHumanBox") > -1){
    //     console.log('already selected') //if the box has been played by human, message this
        
    // }

    var movesAvail =[]

        if(botBox.style.borderBottomColor == ''){
        movesAvail.push('border-bottom-color')
        //console.log('nothing bottom')

        }

        if(botBox.style.borderTopColor == ''){
        movesAvail.push('border-top-color')
        //console.log('nothing top')

        }
        if(botBox.style.borderRightColor == ''){
        movesAvail.push('border-right-color')
        //console.log('nothing right')


        }
        if(botBox.style.borderLeftColor == ''){
        movesAvail.push('border-left-color')
        //console.log('nothing left')

        }
        if(!botBox.style.borderLeftColor == '' && !botBox.style.borderTopColor == '' && !botBox.style.borderBottomColor == '' && !botBox.style.borderRightColor == ''){

            botBox.style.backgroundColor =  "pink"
            botBox.id = "noMoreMoves"
            //this box is finished
            
            }


    //select random
    var aBotsTurn = movesAvail[Math.floor(Math.random()*movesAvail.length)]; 
   // console.log(aBotsTurn)  - the bots line selection
    botBox.style.cssText += aBotsTurn + ":" + botColor;
 
        
        humanPlaying()
        

    }



  //check win /////////////////////////////////////////

 /* var botWin
  var humanWin

  checkWinner = []
  checkWinner.push(botBox.style.borderBottomColor,botBox.style.borderTopColor,botBox.style.borderLeftColor, botBox.style.borderRightColor)

  checkWinner.forEach(function(e){

    botWin = 0
    humanWin = 0
    if(e.indexOf(botColor) > e.indexOf(humanChosenColor)){
        botWin = botWin + 1;
        console.log('bot won')

        
    }else if(e.indexOf(humanChosenColor) > e.indexOf(botColor)){

        humanWin = humanWin + 1
        console.log('human won')
        
    }else{
        console.log('tie') //fix
    }

})

*/

///check game over or continue ///////////////////////////////

/*var checkAll = document.getElementsByClassName('container')[0].children

for (var i=0; i < checkAll.length; i++){
   
    var isGameOver = checkAll[i]
    
          
         if(checkAll[i].style.borderLeftColor.indexOf(botColor) > -1){
            console.log(checkAll[i])
        }
        
    
}*/


/** 
 * checks if no more moves
 * 
 * var checkAll = document.getElementsByClassName('container')[0].children
var arrayLength = 0;
var isGameOver;

for (var i=0; i < checkAll.length; i++){
    
          
         if(checkAll[i].style.borderLeftColor && checkAll[i].style.borderTopColor && checkAll[i].style.borderRightColor && checkAll[i].style.borderBottomColor){
             
           console.log(checkAll[i])
             arrayLength ++
             isGameOver = arrayLength;
             
        }
        
    
}

if(isGameOver < 20) {

    console.log('continue playing')

    
} else if(isGameOver == 20 ){
    console.log('game over')
    alert('Game over  - winner is ')
}
    
} */
