
let uscore = 0;
let cscore = 0;
let result = document.querySelector(".result");

const draw = ()=>{
    result.innerText = "The match is Draw !! Try again";
    document.querySelector(".end-div").style.backgroundColor = "rgb(2, 2, 27)";
}
const user_win = (user_choice,computer_choice)=>{
    uscore++;
    document.querySelector("#user-point").innerText = uscore;
    result.innerText = `You win !! your ${user_choice} hits the ${computer_choice}`;
    document.querySelector(".end-div").style.backgroundColor = "green";
}
const user_lose = (user_choice,computer_choice)=>{
    cscore++;
    document.querySelector("#computer-point").innerText = cscore;
    result.innerText = `Computer win !! ${user_choice} hits your ${computer_choice}`;
    document.querySelector(".end-div").style.backgroundColor = "red";
}

const play_game = (user_choice)=>{
    arr = ["rock","paper","scissor"];
    let computer_choice = arr[Math.floor(Math.random()*3)];

    if (user_choice == computer_choice){
        draw();
    }
    else{
        if(user_choice === "rock"){
            computer_choice === "paper" ? user_lose(user_choice,computer_choice) : user_win(user_choice,computer_choice);
        }
        else if(user_choice === "paper"){
            computer_choice === "rock" ? user_win(user_choice,computer_choice) : user_lose(user_choice,computer_choice);
        }
        else{
            computer_choice === "paper" ? user_win(user_choice,computer_choice) : user_lose(user_choice,computer_choice);
        }
    }

}

let choices = document.querySelectorAll(".choices");
choices.forEach(choice => {
    choice.addEventListener("click",()=>{
        const choiceid = choice.getAttribute("id");
        play_game(choiceid);
    })
});
