let btnRef = document.querySelectorAll(".button-option"); 
let popUp = document.querySelector(".pop-up"); 
let newGameBtn = document.querySelector(".new-game"); 
let message = document.querySelector("#message"); 
let resetBtn = document.querySelector(".restart");
// console.log(btnRef); 

let winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];


const disableButton = ()=>{
    btnRef.forEach((element)=>{
        element.disabled = true ; 
    });
    popUp.classList.remove("hide");
}
const enableButtons = ()=>{
    btnRef.forEach((element)=>{
        element.innerText = "";
        element.disabled = false ;
    }); 
    popUp.classList.add("hide");
}

const newGameStarter = ()=>{
    popUp.classList.add("remove");
    reset() ; 
}

newGameBtn.addEventListener("click" , newGameStarter );
const reset = ()=>{
    count = 0 ;
    enableButtons() ;
}
// adding functionality to the reset button 
resetBtn.addEventListener("click" , reset );

const winFunction = (player)=>{
    disableButton() ; 
    message.innerText = `${player} has won the game ` ;

}

const drawChecker = ()=>{
    message.innerText = "It's a draw ";
    popUp.classList.remove("hide");
}

// Winning Logic 
let winPlayer = "a" ; 
const winLogic = ()=>{
    for (let i of winningPatterns){
        const [ele1 , ele2 , ele3 ] = [btnRef[i[0]].innerText , btnRef[i[1]].innerText , btnRef[i[2]].innerText ];
        if (ele1 != "" && ele2 != "" && ele3 != "" ){
            if (ele1==ele2 && ele2==ele3 ){
                winFunction(ele1) ;
            }
        }
    }
}


// Adding Event Listener to all the buttons 
let xTurn = true  , count = 0 ; 
btnRef.forEach((element)=>{
    element.addEventListener("click" , ()=>{
        if (xTurn){
            xTurn = false ; 
            // yturn = true ;
            element.innerText = "X" ;
            element.disabled = true ;
        }
        else {
            // yturn = false ; 
            xTurn = true ; 
            element.innerText = "O"; 
            element.disabled = true ;
        }
        count++ ; 
        if (count === 9 ) {
            drawChecker() ;
        }
        winLogic() ;
    })
    
}); 
window.onload = enableButtons ; 