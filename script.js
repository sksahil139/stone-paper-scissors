let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".images");
const msg = document.querySelector("#m");
const userScoreCount  = document.querySelector("#user-score");
const compChoiceCount = document.querySelector("#comp-score");

const compChoice = ()=>{
    const  options = ["rock","paper","scissors"];
    let index = Math.floor(Math.random() * 3);

    return options[index];
}

const score = (res) => {
    if(res === "draw")msg.innerHTML = "oh! its a draw";
    else if(res){
        compScore++;
        compChoiceCount.innerHTML = compScore;
        msg.innerHTML = "oops! Computer win";
    }
    else{
        userScore++;
        userScoreCount.innerHTML = userScore;
        msg.innerHTML = "congrats! You Win"
    }
}

const game = (user,comp)=>{
    if(user===comp){
        return "draw";
    }
    else{
        if(user === "rock"){
            return comp === "paper" ? true : false;
        }
        else if(user === "paper"){
            return comp === "scissors" ?true : false;
        }
        else{
            return comp === "rock" ? true : false;       
        }
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        const comp = compChoice();
        let res = game(userChoice,comp);
        score(res);
    })
});
