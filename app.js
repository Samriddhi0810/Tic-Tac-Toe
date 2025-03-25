let boxes=document.querySelectorAll(".box");  //accessing box
let resetBtn=document.querySelector("#reset"); //accessing reset button
let newGameBtn=document.querySelector("#new-btn");  //accessing new button
let mesContainer=document.querySelector(".mes-container"); //accessing message container
let msg=document.querySelector("#msg");   //accessing winner message

let turnO= true;  //playerX,playerO

//2d Array to store winning patterns
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

//function for reset button
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    boxes.forEach((box) => {
        box.innerText = "";
    });
    mesContainer.classList.add("hide");
}


//loop for whose turn write what?
boxes.forEach ((box)=>{
    box.addEventListener("click",()=>{
        //playerO
        if(turnO==true){  //agr paihle player ki turn hai to
            box.innerText="O";
            turnO = false;
        }
        //playerX
        else{              //agr dusre player ki turn hai to
         box.innerText="X";
         turnO = true;
        }
        box.disabled=true; //for locking the button taki phir se same button click kne me value change na ho
        checkWinner(); //calling function calculating winner
    });
});



//For Disabling buttons once ek winner milgaya hai
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
   }

   
//For enabling buttons once ek winner milgaya hai
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
    }
   }


//displaying winner at top
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, winner is ${winner}!`;
    mesContainer.classList.remove("hide");
    disableBoxes();
}
   

     //Function for identifying winner by comparing with winPatterns
      const checkWinner=()=>{
      for (pattern of winPatterns){
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;
         //accessing boxes using no. stored in 2d array
         //jo no. array me store hai unhi index of box ko accsess krna hai        

         if(pos1Val !="" && pos2Val!="" && pos3Val!=""){

            if(pos1Val==pos2Val && pos2Val==pos3Val){
                console.log("Winner!");
                showWinner(pos1Val);
            }
         }
      }
     };
//Event listener
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
     