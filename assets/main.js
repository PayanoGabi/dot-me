var playerColorA;
var playerColorB;
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
    console.log(document.getElementById('pickColor'))
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

            if(e.id == 'playerColorA'){
                botColor = nextSib.style.backgroundColor
                console.log(botColor)
                
            }else if(e.id == 'playerColorB'){
               botColor = previousSib.style.backgroundColor
                console.log(botColor)
                      
            }


             document.querySelector(".container").style.visibility = "visible";
             //
             chooseColor.style.visibility= "hidden";  
             
             
    
        }
        
    })

    humanPlaying() 
   // playBot() 

})

}

//Play Game
var pickLine;
var box;
var clickedBlock = document.querySelectorAll("body > div > div");
var pickAgain = document.querySelector("#pickSides").cloneNode(true)

       function humanPlaying(){
        document.querySelector("body > section").display="block"
           
        
     

        if(nextPlayerHuman){

                clickedBlock.forEach((e, index) => {
                e.onclick = (event) => { 
                box = index + 1;  
                console.log("You clicked button number " + box);
                pickLine = e;
                e.style.backgroundColor = "yellow";
                e.classList.add('preSelectedHumanBox')
                chooseLine();  
                
                }
                
  })
}           
    
}       

    
    


  
  function chooseLine(){
      
      var playModule = document.querySelector("body > section")
      playModule.style.display ="block";
      var nextTurn = document.querySelector("#pickSides").cloneNode(true)

      playModule.innerHTML = "You Have Selected Box " + box + "<br>Please select the line you want to play"
     // document.querySelector("#pickSides").style.display = "block";
      nextTurn.style.display = "block";
         
     //document.querySelector("body > section").appendChild(document.querySelector(nextTurn))


      
      document.querySelector("body > section").appendChild(nextTurn)
      console.log(nextTurn)
      nextTurn.style.display= "block";
      // document.querySelector("#pickSides").style.display= "block";
      
     var sides = document.querySelector("#pickSides > ul")

      sides.addEventListener('click',function(e){

        if(e.target.innerHTML.indexOf("Left") > -1){
            alert('You have selected the left border')
            pickLine.style.borderLeftColor = humanChosenColor;
            pickLine.style.borderLeftWidth=  "13px";
            document.querySelector("body > section").style.display= "none";
           
            playBot()
    
        }else if(e.target.innerHTML.indexOf("Top") > -1){
            alert('You have selected the top border')
             pickLine.style.borderTopColor = humanChosenColor;
             pickLine.style.borderTopWidth ="13px";
             document.querySelector("body > section").style.display = "none";
             e.stopPropagation();
             playBot()

            
        }else if(e.target.innerHTML.indexOf("Right") > -1){
            alert('You have selected the right border')
             pickLine.style.borderRightColor = humanChosenColor;
             pickLine.style.borderRightWidth = "13px";
             document.querySelector("body > section").style.display = "none";
             e.stopPropagation();
             playBot()
        }else if(e.target.innerHTML.indexOf("Bottom") > -1){
            alert('You have selected the bottom border')
             pickLine.style.borderBottomColor = humanChosenColor;
             pickLine.style.borderBottomWidth = "13px";
             document.querySelector("body > section").style.display = "none";
             e.stopPropagation();
             playBot()
            
        }
        
    })
    

  }
  

  function playBot(){

    var botBox = clickedBlock[Math.floor(Math.random()*clickedBlock.length)];
    botBox.id = "botChosen";
    if(botBox.outerHTML.indexOf("preSelectedHumanBox") > -1){
        console.log('already selected')
    }


    aBotsTime = [botBox.style.cssText += 'border-left-color'
    ,botBox.style.cssText += 'border-right-color'
    , botBox.style.cssText += 'border-bottom-color'
    , botBox.style.cssText += 'border-top-color'
    ]
    //select random
    var aBotsTurn = aBotsTime[Math.floor(Math.random()*aBotsTime.length)]; 
    console.log(botBox.style = aBotsTurn + ":" +botColor)
    

        if(aBotsTurn.indexOf(humanChosenColor) > -1 || aBotsTurn.indexOf(botColor) > -1){
            console.log('seats taken')
         
        }
       console.log(document.querySelector("#pickSides"))
       
        
        humanPlaying()
        

    }
