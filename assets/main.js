var humanChosenColor;
var nextPlayerHuman = true;
var botColor;



//Start Game
document.querySelector("#pickSides").style.display = "none";


window.onload = function () {



    document.querySelector(".container").style.visibility = "hidden";
    document.querySelector("body > section").innerHTML = "Start Game <br>";
    var button = document.createElement("button");
    document.querySelector("body > section").appendChild(button);
    document.querySelector("body > section > button").addEventListener('click', function () {

        document.querySelector("body > section").innerHTML = "";
        // console.log(document.getElementById('pickColor'))
        var chooseColor = document.querySelector("#pickColor");
        document.querySelector("body > section").style.display = "none"


        var human = [];
        human.push(chooseColor.childNodes[3])
        human.push(chooseColor.childNodes[5])
        human.forEach((e, index) => {

            e.onclick = function (event) {

                console.log(event);
                var eventTarget = event.path[0].childNodes[0].data
                alert('you have chosen' + eventTarget);
                event.path[0].classList.add('selectedColor');
                humanChosenColor = event.path[0].style.backgroundColor;

                var nextSib = event.path[0].nextElementSibling;
                var previousSib = event.path[0].previousElementSibling

                humanChosenColor = event.path[0].style.backgroundColor;
                //console.log(e)

                if (e.id == 'playerColorA') { //pick color
                    console.log(nextSib)
                
                    botColor = nextSib.style.backgroundColor
                    //console.log(botColor)

                } else if (e.id == 'playerColorB') { 
                    //pick color
                    console.log(nextSib)

                    botColor = previousSib.style.backgroundColor
                    // console.log(botColor)   
                }
               

                document.querySelector(".container").style.visibility = "visible";
                chooseColor.style.visibility = "hidden";

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

function humanPlaying() { //Play Game (human) - if any box clicked this is a humans turn
    document.querySelector("body > section").display = "block"



    if (nextPlayerHuman) {

        clickedBlock.forEach((e, index) => {
            e.onclick = (event) => {
                box = index + 1;
                //console.log("You clicked button number " + box);
                pickLine = e;
                e.style.backgroundColor = "#c5bbae";
                e.classList.add('preSelectedHumanBox')
                e.style.boxShadow = "#c5bbae 0px 5px 15px;"
                e.classList.add('mouse-hov')
               


                chooseLine();

            }

        })
    }

}


//human choose line that they want to play
function chooseLine() {
    //console.log(pickLine)

    var playModule = document.querySelector("body > section")
    playModule.style.display = "block";
    var nextTurn = document.querySelector("#pickSides").cloneNode(true)

    playModule.innerHTML = "You Have Selected Box " + box + "<br>Please select the line you want to play"
    // let human know what line they have decided
    nextTurn.style.display = "block";

    document.querySelector("body > section").appendChild(nextTurn)
    //console.log(nextTurn)
    nextTurn.style.display = "block"; //at end of turn close body section container


    var sides = document.querySelector("#pickSides > ul")


    sides.addEventListener('click', function (e) {

        if (e.target.innerHTML.indexOf("Left") > -1 && pickLine.style.borderLeftColor == '') {
            alert('You have selected the left border')
            pickLine.style.cssText += "border-left-color" + ":" + humanChosenColor
            //pickLine.style.borderLeftColor = humanChosenColor;
            pickLine.style.borderLeftWidth = "13px";
            document.querySelector("body > section").style.display = "none";
            //console.log(cantTouchThis)
            playBot() //after human selects , bot selects

        } else if (e.target.innerHTML.indexOf("Left") > -1 && !pickLine.style.borderLeftColor == '') {
            alert('You have selected the left border - you cant choose this')

        }

        if (e.target.innerHTML.indexOf("Top") > -1 && pickLine.style.borderTopColor == '') {
            alert('You have selected the top border')
            pickLine.style.cssText += "border-top-color" + ":" + humanChosenColor
            // pickLine.style.borderTopColor = humanChosenColor;
            pickLine.style.borderTopWidth = "13px";
            document.querySelector("body > section").style.display = "none";
            e.stopPropagation();
            playBot() //after human selects , bot selects


        } else if (e.target.innerHTML.indexOf("Top") > -1 && !pickLine.style.borderTopColor == '') {
            alert('You have selected the top border - you cant choose this')

        }

        if (e.target.innerHTML.indexOf("Right") > -1 && pickLine.style.borderRightColor == '') {
            alert('You have selected the right border')
            pickLine.style.cssText += "border-right-color" + ":" + humanChosenColor
            pickLine.style.borderRightWidth = "13px";
            document.querySelector("body > section").style.display = "none";
            e.stopPropagation();
            playBot() //after human selects , bot selects

        } else if (e.target.innerHTML.indexOf("Right") > -1 && !pickLine.style.borderRightColor == '') {
            alert('You have selected the right border - you cant choose this')

        }

        if (e.target.innerHTML.indexOf("Bottom") > -1 && pickLine.style.borderBottomColor == '') {
            alert('You have selected the bottom border')
            pickLine.style.cssText += "border-bottom-color" + ":" + humanChosenColor;
            pickLine.style.borderBottomWidth = "13px";
            document.querySelector("body > section").style.display = "none";
            e.stopPropagation();
            playBot() //after human selects , bot selects

        } else if (e.target.innerHTML.indexOf("Bottom") > -1 && !pickLine.style.borderBottomColor == '') {
            alert('You have selected the bottom border - you cant choose this')

        }

        if (!pickLine.style.borderLeftColor == '' && !pickLine.style.borderTopColor == '' && !pickLine.style.borderBottomColor == '' && !pickLine.style.borderRightColor == '') {

            pickLine.style.backgroundColor = "pink";
            pickLine.classList.add('humanWin')
            //pickLine.style.backgroundImage="url(/Applications/MAMP/htdocs/Dots/images/game-over-moon.jpg)"; 
            pickLine.id = "noMoreMoves"
            //this box is finished

        }

    })

}


function playBot() {

    var botBox = clickedBlock[Math.floor(Math.random() * clickedBlock.length)];
    var array = [botBox.style.borderRightColor, botBox.style.borderLeftColor, botBox.style.borderBottomColor, botBox.style.borderTopColor];

    var countThis = 0;

    for (i = 0; i < array.length; i++) {
        if (array[i] == botColor || array[i] == humanChosenColor) {
            countThis++


            if (countThis == 4) {
                //console.log(botBox)
                botBox.style.cssText += "background-color:pink!important"
                //console.log('niii function botUpdate(){')
                playBot()

            }
        }
    }



    botBox.id = "botChosen";
    botBox.style.backgroundColor = "#c5bbae"
    botBox.style.boxShadow = "#c5bbae 0px 5px 15px;"

    var movesAvail = []

    if (botBox.style.borderBottomColor == '') {
        movesAvail.push('border-bottom-color')
        //console.log('nothing bottom')

    }

    if (botBox.style.borderTopColor == '') {
        movesAvail.push('border-top-color')


    }
    if (botBox.style.borderRightColor == '') {
        movesAvail.push('border-right-color')



    }
    if (botBox.style.borderLeftColor == '') {
        movesAvail.push('border-left-color')


    }

    //select random
    var aBotsTurn = movesAvail[Math.floor(Math.random() * movesAvail.length)];
    // console.log(aBotsTurn)  - the bots line selection
    botBox.style.cssText += aBotsTurn + ":" + botColor;

    var arrayTwo = [botBox.style.borderRightColor, botBox.style.borderLeftColor, botBox.style.borderBottomColor, botBox.style.borderTopColor];
    var countThis = 0;

    function botUpdate() {
        for (i = 0; i < arrayTwo.length; i++) {
            if (arrayTwo[i] == botColor || arrayTwo[i] == humanChosenColor) {

                countThis++;
                // console.log('hi')
                //console.log(i);
                if (countThis == 4) {
                    //botBox.style.backgroundColor = "pink"
                    botBox.style.cssText += "background-color:pink!important";
                    if (!botBox.classList.contains('humanWin')) {

                        botBox.classList.add('botWin')
                    }

                }

            }
        }
    }
    botUpdate()
    gameFinished()
    humanPlaying()
}



//check winne
/** 
 * checks if game is over 
 **/

function gameFinished() {
    var checkAll = document.getElementsByClassName('container')[0].children
    var arrayLength = 0;
    var isGameOver;

    for (var i = 0; i < checkAll.length; i++) {

        if (checkAll[i].style.borderLeftColor && checkAll[i].style.borderTopColor && checkAll[i].style.borderRightColor && checkAll[i].style.borderBottomColor) {

            arrayLength++
            isGameOver = arrayLength;


        }

    }

    if (isGameOver < 20) {
        humanPlaying()

    } else if (isGameOver == 20) {
        whosWonAnyway()
    }

}

var scoreBot
var scoreHuman

function whosWonAnyway() {

    var humanWins = document.querySelectorAll('.humanWin').length - 1
    var botWins = document.querySelectorAll('.botWin').length - 1

    scoreBot = botWins
    scoreHuman = humanWins

    if (botWins > humanWins) {

        var winDiv = document.createElement('div');
        document.querySelector("body").appendChild(winDiv).id = "showWinner";
        winDiv.innerHTML = "Bot Won" + "<br>Bot " + scoreBot +" human " + scoreHuman 


    } else if (humanWins > botWins) {

        var winDiv = document.createElement('div');
        document.querySelector("body").appendChild(winDiv).id = "showWinner";
        winDiv.innerHTML = "You Win" + "<br>Bot " + scoreBot +" human " + scoreHuman 


    } else if (botWins == humanWins) {

        var winDiv = document.createElement('div');
        document.querySelector("body").appendChild(winDiv).id = "showWinner";
        winDiv.innerHTML = "Tie" + "<br>Bot " + scoreBot +" human " + scoreHuman 


    } else {
       
    }
   
}