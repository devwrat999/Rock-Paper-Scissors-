let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#computer-score");

const gencomputerchoice = () =>{
     const options = ["rock","paper","scissors"];
     const randomidx = Math.floor(Math.random() * 3);
     return options[randomidx];
}

const drawgame = ()=>{
    
    msg.innerText = "Draw ! Play Again";
    msg.style.backgroundColor="#081b31";
    
}

const showwinner = (userwin,userchoice,compchoice)=>{
  if(userwin)
  {
    userscore++;
    userscorepara.innerText=userscore;
   
    msg.innerText = `You win !! your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor="green";
  }
  else{
    compscore++;
    compscorepara.innerText=compscore;
   
    msg.innerText = `You lose ~ ${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor="red";
    
  }
}

const playgame = (userchoice) =>{
 
  const compchoice=gencomputerchoice();
 

  if(userchoice === compchoice)
  {
    drawgame();
  }
  else{
    let userwin = true;
    if(userchoice === "rock")
    {
        // paper,scissors
        userwin=compchoice === "paper" ? false : true;
    }
    else if(userchoice === "paper")
    {
        // rock scissors
        userwin=compchoice === "scissors" ? false : true;

    }
    else{
        // rock paper
        userwin = compchoice === "rock" ? false : true;
    }
    showwinner(userwin,userchoice,compchoice);

  }
};

choices.forEach((choice) =>{
choice.addEventListener("click",()=>{
    const userchoice=choice.getAttribute("id");
    playgame(userchoice);
});
});